const express = require('express');
const helmet = require('helmet');

const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const server = express();
const parser = express.json();

server.use(parser);
server.use(helmet());

const PORT = 3000;

//ENDPOINTS

server.post('/projects', (req, res) => {
    const project = req.body;

    db.insert(project)
        .into('projects')
        .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: 'Could not insert project'
            });
        });
});

server.post('/actions', (req, res) => {
    const action = req.body;

    db.insert(action)
        .into('actions')
        .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: 'Could not insert action'
            });
        });
});

server.get('/projects/:id', (req, res) => {
    const { id } = req.params;

    db('actions')
        .where({ project_id: id })
        .then(actions => {
            let actionsCopy = actions;
            for (let i = 0; i < actionsCopy.length; i++) {
                if (actionsCopy[i].completed) {
                    actionsCopy[i].completed = true;
                } else {
                    actionsCopy[i].completed = false;
                }
            }
            db('projects')
                .where({ id })
                .then(response => {
                    let projectCopy = response[0];
                    if (projectCopy.completed) {
                        projectCopy.completed = true;
                    } else {
                        projectCopy.completed = false;
                    }
                    let projectWithActions = { ...projectCopy, actions: actionsCopy }
                    res.json(projectWithActions)
                });
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "There was an error when trying to find the project."
            });
        });
});

server.listen(PORT, function () {
    console.log(`\n API Listening on http://localhost:${PORT}\n`);
});