const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = './knexfile.js';
const db = knex(knexConfig.development);

const helper = require('./data/helper');

const server = express();

server.use(express.json(), helmet());

// ===================== END POINTS ======================

server.get('/', (req, res) => {
    res.json('Server running');
});

server.get('/api/projects', (req, res) => {
    helper
        .getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

server.get('/api/actions', (req, res) => {
    helper
        .getActions()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    helper
        .getProject(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

server.get('/api/actions/:id', (req, res) => {
    const { id } = req.params;
    helper
        .getAction(id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

server.post('/api/projects', (req, res) => {
    const project = req.body;
    helper
        .addProject(project)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

server.post('/api/actions', (req, res) => {
    const action = req.body;
    helper
        .addAction(action)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

// ===================== SERVER ==========================

const port = 8000;
server.listen(port, () => {
    console.log(`API is listening on port ${port}`)
});