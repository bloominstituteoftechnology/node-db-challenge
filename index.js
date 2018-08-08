const express = require('express');
const app = express();
const db = require('./data/db.js')
const logger = require('morgan')

app.use(express.json());
app.use(logger());


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


app.post('/project', (req, res) => {
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

app.put('/project/:id', (req, res) => {
    const { id } = req.params
    
    
});

app.delete('path', (req, res) => {
    
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

app.post('/actions/:id', (req, res) => {

    
});

app.put('/actions/:id', (req, res) => {
    
});

app.delete('/actions/:id', (req, res) => {
    
});

app.listen(6000, () => {
    console.log('Example app listening on port 6000!');
});

//Run app, then load http://localhost:6000 in a browser to see the output.