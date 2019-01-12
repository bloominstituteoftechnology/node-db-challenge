const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile.js');

const db = knex(dbConfig.development);

const server = express();

const port = 5000;

server.use(express.json());

//get all for projects to test with Postman
server.get('/projects', (req, res) =>{
    db('projects').then(projects =>{
        res.json(projects);
    })
    .catch(err =>{
        res.status(500).json({err : 'Failed to get projects'})
    })
})

server.get('/projects/:id', (req, res) =>{
    const {id} = req.params;
    db('projects').where('id', id).then(rows =>{
        res.json(rows);
    })
    .catch(err =>{
        res.status(500).json({err: 'Faile to find project with specified ID'})
    })
})
//post for projects
//INSERT INTO projects (name, description, completed) VALUES (1, 2, 3)
server.post('/projects', (req, res) =>{
    const project = req.body;
    db('projects').insert(project).into('projects')
    .then(ids =>{
        res.status(201).json(ids);
    })
    .catch(err =>{
        res.status(500).json({err: 'Failed to insert new project'})
    })
})

server.delete('/projects/:id', (req,res) =>{
    const {id} = req.params;
    db('projects').where('id', id).del().then(rowCount =>{
        res.status(201).json(rowCount);
    })
    .catch(err =>{
        res.status(500).json({err: 'Failed to delete project'})
    })
})

server.put('/projects/:id', (req, res) =>{
    const {id} = req.params;
    const projectBody = req.body;
    db('projects').where('id', id).update(projectBody).then(rowCount =>{
        res.json(rowCount);
    })
    .catch(err =>{
        res.status(500).json({err: 'Failed to update project'});
    })
})

//post for actions
//INSERT INTO actions (action_description, notes, completed, project_id) VALUES (w, x, y, z)

//get for project by id
//SELECT * FROM projects WHERE id = 1

server.listen(port, () =>{
    console.log(`Server is up and running on port ${port}`)
})