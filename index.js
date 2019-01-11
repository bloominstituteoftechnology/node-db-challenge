const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);
const port = 5000;

server.use(express.json());

//get all for projects to test with Postman
server.get('/api/projects', (req, res) =>{
    db('projects').then(rows =>{
        res.json(rows);
    })
    .catch(err =>{
        res.status(500).json({err : 'Failed to get projects'})
    })
})
//post for projects
//INSERT INTO projects (name, description, completed) VALUES (1, 2, 3)
server.post('/api/projects', (req, res) =>{
    const project = req.body;
    db('projects').insert(project)
    .then(ids =>{
        res.status(201).json(ids);
    })
    .catch(err =>{
        res.status(500).json({err: 'Failed to inseert new project'})
    })
})

//post for actions
//INSERT INTO actions (action_description, notes, completed, project_id) VALUES (w, x, y, z)

//get for project by id
//SELECT * FROM projects WHERE id = 1

server.listen(port, () =>{
    console.log(`Server is up and running on port ${port}`)
})