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

module.exports = router;