const express = require('express');

const projects = require('./projectsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    projects
    .getProject()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
    const project = req.body;

    projects
        .addProject(project)
        .then(ids => {
            res.status(201).json(ids[0]);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;