const express = require('express');
const router = express.Router();

const Projects = require('./projects-model')

//Create - add resources, projects, tasks
router.post('/', (req, res) => {
    Projects.addProject(req.body)
        .then(project => {
            res.status(201).json(req.body)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//Read - get all resources, projects, and tasks
router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//Update

//Delete

module.exports = router;