const db = require('./data/db.js');
const express = require('express');

const PORT = 4040;
const server = express();

server.use(express.json());

// add project

server.post('/api/projects', (req, res) => {
    const newProject = req.body;
    db.addProject(newProject)
        .then(idInfo => {
            res
                .status(201)
                .json(idInfo);
        })
        .catch(err => {
            res
                .status(500)
                .json({message: 'The project could not be added at this time.'});
        });
});

// add action

server.post('/api/actions', (req, res) => {
    const newAction = req.body;
    db.addAction(newAction)
        .then(idInfo => {
            res
                .status(201)
                .json(idInfo);
        })
        .catch(err => {
            res
                .status(500)
                .json({message: 'The action could not be added at this time.'});
        });
});

// get project and related actions

server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    db.getProject(id)
        .then(project => {
            if (project.length > 0) {
                res
                    .json(project);
            }
            else {
                res
                    .status(404)
                    .json({message: 'There is no project with the specified ID.'});
            }
        })
        .catch(err => {
            res
                .status(500)
                .json({message: 'The project could not be retrieved at this time.'});
        });
});

// initiate listening

server.listen(PORT, err => {
    console.log(`Server is running on ${PORT}`);
});