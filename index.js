const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile.js');

const server = express();
const db = knex(dbConfig.development);
const PORT = 5000;

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

server.get('/project', (req, res) => {
    db('project')
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get projects' })
        })
});

server.get('/project/:id', (req, res) => {
    const { id } = req.params;
    db('project').where('id', id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get project' })
        })
});

server.get('/action', (req, res) => {
    db('action')
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get actions' })
        })
});

server.get('/action/:id', (req, res) => {
    const { id } = req.params;

    db('action').where('id', id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get action' })
        })
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});