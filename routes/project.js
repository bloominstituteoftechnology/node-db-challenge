const express = require('express');
const router = express.Router();

const projectDB = require('../data/helpers/projectDb');
const actionDB = require('../data/helpers/actionDb');

router.get('/:id', (req, res) => {
    const {id} = req.params;
    let project = [];

    projectDB.get(id)
        .then(projectRows => {
            project = [projectRows[0]];

            actionDB.get(id)
                .then(actionRows => {
                    project[0].actions = actionRows;
                    res.json(project);
                })
                .catch(err => {
                    res.status(500).json({ errorMessage: 'failed to get actions' })
                });
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to get project' });
        });
});

router.post('/', (req, res) => {
    const project = req.body;

    projectDB.add(project)
        .then(projectId => {
            res.status(201).json(projectId);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to insert project' });
        });
    });

module.exports = router;