const express = require('express');
const knex = require('knex');
const server = express();
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);
const PORT = process.env.PORT || 3000;

server.use(express.json());

//POST endpoint for projects
server.post('/api/projects', (req, res) => {
    const project = req.body;
    db('Projects').insert(project)
    .then(projectData => {
        res.status(201).json(projectData);
    })
    .catch(err => {
        res.status(500).json({err:'unable to add data'})
    });
});

//POST endpoint for actions
server.post('/api/actions', (req, res) => {
    const action = req.body;
    db('Actions').insert(action)
    .then(actionData => {
        res.status(201).json(actionData);
    })
    .catch(err => {
        res.status(500).json({err:'unable to add data'})
    });
});

//GET for retrieving a project by its id that returns an object
server.get('/api/projects', (req, res) => {
    db('Projects').leftJoin('Actions', 'project_id', 'Projects.id')
    // db('Projects').join('Actions') ===> had to change this 
    .then(projectInfo => {res.send(projectInfo)})
    .catch(err => {
        res.status(500).json({err: 'whoops, something went wrong!'})
    })
})

server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    db('Projects').where('id', id)
    .then(projectId => {res.json(projectId)})
    .catch(err => {res.status(500).json({message: 'there was an error'})})
})

server.delete('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    db('Projects').where('id', id).del()
    .then(rowsDeleted => {res.status(201).json(rowsDeleted)})
    .catch(err => {res.status(500).json({message: "cannot delete"})})
})
server.listen(PORT, function() {
  console.log(`\n=== Web API Listening on http://localhost:${PORT} ===\n`);
});