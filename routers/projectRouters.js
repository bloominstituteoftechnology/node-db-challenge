const express = require('express');
const router = express.Router();
const dbProjectHelpers = require('../data/db_projectHelpers');

router.post('/', (req, res) => {
    const project = req.body;
    dbProjectHelpers.addProject(project)
        .then(projectInfo => {
            res.send(projectInfo)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to insert project' })
        });
});

router.get('/', (req, res) => {
    dbProjectHelpers.getProjects()
        .then(projectInfo => {
            res.send(projectInfo)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get projects' })
        })
});

router.get('/:id/action', (req, res) => {
    const { id } = req.params;
    dbProjectHelpers.getProjectById(id)
        .then(project => {
            res.send(project)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get project' })
        })
});

module.exports = router;