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
    if(!project.name || !project.description || !project.completed) {
        res.status(400).json({err:'must add required project fields'})
    }
    else{
    db('Projects').insert(project)
    .then(projectData => {
        res.status(201).json(projectData);
    })
    .catch(err => {
        res.status(500).json({err:'unable to add data'})
    })};
});

//POST endpoint for actions
server.post('/api/actions', (req, res) => {
    const action = req.body;
    db('Actions').insert(action)
        .then(actionData => {
        res.status(201).json(actionData);
    })
    .catch(err => {
        res.status(500).json({err:'cannot add action'})
    });
});


server.listen(PORT, function() {
    console.log(`\n=== Web API Listening on http://localhost:${PORT} ===\n`);
  });