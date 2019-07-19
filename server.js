const express = require('express');
const helmet = require('helmet')
const knex = require('knex');

// const projectModel = require('./data/helpers/projectModel');
// const actionModel = require('./data/helpers/actionModel');

const server = express();

server.use(helmet());
server.use(express.json());

server.post('/projects', (req, res) => {
    const projectInfo = req.body;
    projectModel.insert(projectInfo)
    .then(project => {
        res.status(201).json({ success: true, project });
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            message: 'Oops Something went wrong'
        })
    })
})

server.post('/actions', (req, res) => {
    const actionInfo = req.body;
    actionModel.insert(actionInfo)
    .then(action => {
        res.status(201).json({ success: true, action });
    })
    .catch(err => res.status(500).json({ message: 'Error adding the action' }))
})

server.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    projectModel.findById(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({
            error: 'error retrieving the project'
        })
    })
})

module.exports = server;