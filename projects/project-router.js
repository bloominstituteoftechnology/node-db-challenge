const express = require('express');
const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(500).json({message: "Sorry unable to obtain list of projects"}))
})

router.get('/:id/tasks', (req, res) => {
    Projects.getTasksByProject(req.params.id)
        .then(tasks => res.status(200).json(tasks))
        .catch(err => res.status(500).json({message: "Sorry unable to obtain list of tasks"}))
})

router.post('/', (req, res) => {
    console.log(req.body);
    Projects.addProject(req.body)
        .then( project => res.status(201).json(project))
        .catch(err => res.status(500).json({message: "Sorry unable to add project"}))

})

router.post('/:id/tasks', (req, res) => {
    const task = {...req.body, project_id: req.params.id}
    Projects.addTasks(task)
        .then(task => res.status(201).json(task))
        .catch(err => res.status(500).json({message: "Sorry unable to add task"}))

})

module.exports = router;