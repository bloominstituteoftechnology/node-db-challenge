const express = require('express');

const router = express.Router();

const db = require('./model')



router.post('/resources', (req, res) => {
    const newResource = req.body
    console.log(newResource)
    db.addResources(newResource)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "failed to add resource"})
    })
})

router.get('/resources', (req, res) => {
    db.listResources()
    .then(resource => {
        res.json(resource);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "failed to get resources"})
    })
})

router.post('/projects', (req, res) => {
    const newproject = req.body
    console.log(newproject)
    db.addprojects(newproject)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "failed to add project"})
    })
})

router.get('/:id/projects', (req, res) => {
    db.listprojects()
    .then(project => {
        res.json(project);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "failed to get project"})
    })
})

router.post('/task', (req, res) => {
    const newtask = req.body
    console.log(newtask)
    db.addTask(newtask)
    .then(task => {
        res.status(201).json(task);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "failed to add task"})
    })
})

router.get('/task', (req, res) => {
    db.listTask()
    .then(task => {
        res.json(task);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "failed to get task"})
    })
})



module.exports = router;