const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile');

const server = express();
const db = (dbConfig.development);
const PORT = 0112

server.use(express.json());

server.post('/project', (req, res) => {
    const project = req.body;
    db('project').insert(project)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to insert project' })
        });
});

server.post('/action', (req, res) => {
    const action = req.body;
    db('action').insert(action)
        .then(action => {
            res.status(201).json(action);
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to insert action' })
        });
});

server.get('/project/:id', (req, res) => {
    const { id } = req.params;
    db('project').where('id', id)
        .then(project => {
            res.status(200).json(porject);
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get project' })
        })
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

//When I run the server it says it's running on port 74, not sure why this is. Unable to test endpoints