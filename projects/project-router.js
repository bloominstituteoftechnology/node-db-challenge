const express = require('express');
const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(500).json({message: "Sorry unable to obtain list of projects"}))
})

module.exports = router;