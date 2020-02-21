const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error retrieving projects.'});
        });
});

router.post('/', (req, res) => {
    Projects.addProjects(req.body)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error adding your project.'})
        });
});

router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error retrieving tasks.'});
        });
});

router.post('/tasks', (req, res) => {
    Projects.addTasks(req.body)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error adding your task.'})
        });
});

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error retrieving resources.'});
        });
});

router.post('/resources', (req, res) => {
    Projects.addResources(req.body)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error adding your resource.'})
        });
});

module.exports = router;