const express = require('express');
const db = require('../data/dbConfig.js');
const router = express.Router();
const Projects = require('./project-model.js')

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error getting projects.' })
        })
})

router.post('/', (req, res) => {
    const project = req.body;

    Projects.getProjects()
        .insert(project)
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error posting project.' })
        })
})

module.exports = router;