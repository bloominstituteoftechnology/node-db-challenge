const express = require('express');

const projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    projects.getProjects().then(projects =>{
        res.json(projects);
    })
    .catch(err =>{
        res.status(500).json({message: 'Failed to get projects'})
    })
});

router.get('/resources', (req, res) => {
    projects.getResources().then(resources =>{
        res.json(resources)
    })
    .catch(err =>{
        res.status(500).json({message: 'Failed to get projects'})
    })
});

router.get('/tasks', (req, res) => {
    projects.getTasks().then(tasks =>{
        res.json(tasks)
    })
    .catch(err =>{
        res.status(500).json({message: 'Failed to get projects'})
    })
});

router.post('/', (req, res) => {
    const project = req.body;
    projects.addProject(project).then(response =>{
        if(response){
            res.json(response);
        } else {
            res.status(400).json({message: 'please provide valid params'})
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'Failed to add project'})
    })
});

router.post('/resources', (req, res) => {
    const resource = req.body;

    projects.addResources(resource).then(resources =>{
        if(resources){
            res.json(resources);
        } else {
            res.status(400).json({message: 'please provide valid params'})
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'Failed to add resources'})
    })
});

router.post('/:id/tasks', (req, res) => {
    const task = req.body;
    const { id } = req.params;

    projects.addTasks(task, id).then(task =>{
        if(task){
            res.json(task)
        } else {
            res.status(400).json({message: 'please provide valid params'})
        }
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({message: 'Failed to add task'})
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    projects.getProject(id).then(project =>{
        if(project){
            res.json({...project})
        } else {
            console.log(project)
            res.status(400).json({message: 'please provide valid project ID'})
        }
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({message: 'Failed to get project'})
    })
});



module.exports = router;