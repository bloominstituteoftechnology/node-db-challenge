const express = require('express');

const helper = require('./helpers');

const server = express();

const PORT = 4000;

server.use(express.json());

server.post('/api/projects', (req, res) => {
    const project = req.body;
    if (project.project_name) {
        helper.addProject(project)
        .then((projectID) => {
            res.status(201).json(projectID);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
    }
})

server.post('/api/actions', (req, res) => {
    const action = req.body;
    if (action.action_name) {
        helper.addAction(action)
        .then((actionID) => {
            res.status(201).json(actionID);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
    }
})

server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    helper.getProjectByIDFormatted(id)
    .then((project) => {
        res.status(200).json(project);
    })
    .catch((error) => {
        res.status(500).json(error);
    })
})

server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})