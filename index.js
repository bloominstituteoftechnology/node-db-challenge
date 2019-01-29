const express = require('express');

const knex = require('knex');

const db_config = require('./knexfile.js');

const db = knex(db_config.development);

const dbProjectHelpers = require('./data/db_projectHelpers');
const dbActionHelpers = require('./data/db_actionHelpers');

const server = express();
const PORT = 5000;

server.use(express.json());

server.post('/project', (req, res) => {
    const project = req.body;
    dbProjectHelpers.addProject(project)
        .then(projectInfo => {
            res.send(projectInfo)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to insert project' })
        });
});

server.post('/action', (req, res) => {
    const action = req.body;
    dbActionHelpers.addAction(action)
        .then(actionInfo => {
            res.send(actionInfo)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to insert action' })
        });
});

server.get('/project', (req, res) => {
    dbProjectHelpers.getProjects()
        .then(projectInfo => {
            res.send(projectInfo)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get projects' })
        })
});

// server.get('/project/:id', (req, res) => {
//     const { id } = req.params;
//     dbProjectHelpers.getProjectById(id)
//         .then(projectInfo => {
//             res.send(projectInfo)
//         })
//         .catch(err => {
//             res.status(500).json({ err: 'Failed to get project' })
//         })
// });

server.get('/project/:id/action', (req, res) => {
    const { id } = req.params;
    db('action').where('project_id', id)
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get project' })
        })
});

server.get('/action', (req, res) => {
    dbActionHelpers.getActions()
        .then(actionInfo => {
            res.send(actionInfo)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get actions' })
        })
});

server.get('/action/:id', (req, res) => {
    const { id } = req.params;

    dbActionHelpers.getActionById(id)
        .then(actionInfo => {
            res.send(actionInfo)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get action' })
        })
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});