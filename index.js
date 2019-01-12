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
    db('projects').insert(project)
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
    db('actions').insert(action)
    .then(actionData => {
        res.status(201).json(actionData);
    })
    .catch(err => {
        res.status(500).json({err:'unable to add data'})
    });
});

//GET for retrieving a project by its id that returns an object
server.get('/api/projects', (req, res) => {
    db('Projects').leftJoin('actions', 'project_id', 'project.id')
    .then(projectInfo => {res.send(projectInfo)})
    .catch(err => {
        res.status(500).json({err: 'whoops, something went wrong!'})
    })
})

server.listen(PORT, function() {
  console.log(`\n=== Web API Listening on http://localhost:${PORT} ===\n`);
});