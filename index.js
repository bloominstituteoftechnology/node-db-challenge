const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);
const PORT = 3000;

server.use(express.json());   //body parser middleware

// POST for adding projects
server.post('/projects', (req , res) => {
    const project = req.body;
    console.log('project info', project)
    db('projects').insert(project)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Failed to insert project'});
    });
});

// POST for adding actions
server.post('/actions', (req , res) => {
    const action = req.body;
    console.log('action info', action)
    db('actions').insert(action)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to insert action"});
    })
})

// GET for retrieving projects


// SERVER LISTEN
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})