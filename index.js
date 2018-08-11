const express = require('express');
const app = express();
const db = require('./data/db.js')
const logger = require('morgan')

app.use(express.json());
app.use(logger('dev'));


app.get('/', (req, res) => {
    res.send('Welcome to Lambda School RDBMS Challange');
});

//CRUD API for Projects

app.get('/projects', (req, res) => {
    db.getProjects()
        .then(response => {
            res.status(200).json(response); 
        })
        .catch(err => {
            res.status(500).json({error : err })
        })

});

app.get('/projects/:id', (req, res) => {
    const { id } = req.params
    db.getProjects(id).first()
        .then(response => {
            if(response){
                db.getActionByProject(id)
                    .then(actions => {
                        response.actions = actions
                        res.status(200).json(response)
                    })
            }
        })
        .catch(err => {
            res.status(500).json({error : err })
        })    
});


app.post('/projects', (req, res) => {
    const { project_name , description } = req.body
    const newProject = { project_name , description }
    db.addProjects(newProject)
        .then(response => {
            res.status(200).json(response)
        })
        .catch( err => {
            res.status(500).json({error : err })
        })
});

app.put('/projects/:id', (req, res) => {
    const { id } = req.params
    const { project_name, description } = req.body
    const updatedProject = { project_name, description }
    db.editProject(id, updatedProject)
        .then( response => {
            res.status(200).json(response)
        })
        .catch( err => {
            res.status(500).json({error : err})
        })  
});

app.delete('/projects/:id', (req, res) => {
    const { id } = req.params
    db.deleteProject(id)
        .then( response => {
            res.status(200).json(response)
        })
        .catch( err => {
            res.status(500).json({ error : err })
        })   
});

app.get('/actions', (req, res) => {
    db.getActions()
        .then( response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error : 'there is error'})
        })
});

app.post('/actions', (req, res) => {
    const { name , description, project_id } = req.body
    const newAction = { name , description, project_id }
    console.log(newAction)
    db.addAction(newAction)
        .then(response => {
            res.status(200).json(response)
        })
        .catch( err => {
            res.status(500).json({error : err })
        })
});

app.put('/actions/:id', (req, res) => {
    const { id } = req.params
    const { project_name, description } = req.body
    const updatedAction = { project_name, description }
    db.editAction(id, updatedAction)
        .then( response => {
            res.status(200).json(response)
        })
        .catch( err => {
            res.status(500).json({error : err})
        })  
});

app.delete('/actions/:id', (req, res) => {
    const { id } = req.params
    db.deleteAction(id)
        .then( response => {
            res.status(200).json(response)
        })
        .catch( err => {
            res.status(500).json({ error : err })
        })   
});

app.listen(6000, () => {
    console.log('Example app listening on port 6000!');
});

//Run app, then load http://localhost:6000 in a browser to see the output.