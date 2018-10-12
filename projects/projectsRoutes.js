const express = require('express');

const projects = require('./projectsModel.js');

const router = express.Router();

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