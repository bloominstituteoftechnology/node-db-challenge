const express = require('express');
const router = express.Router();

const Projects = require('./projects-model')

//Create - add resources, projects, tasks

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