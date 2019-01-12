const express = require('express');
const router = express.Router();

const projectDB = require('../data/helpers/projectDb');

router.get('/:id', (req, res) => {
    const {id} = req.params;

    projectDB.get(id)
        .then(rows => {
            res.json(rows);
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