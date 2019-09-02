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

router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error getting tasks.' })
        })
})

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error getting tasks.' })
        })
})

router.post('/', (req, res) => {
    const project = req.body;

    Projects.postProject()
        .insert(project)
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error posting project.' })
        })
})

router.post('/tasks', (req, res) => {
    const task = req.body;
  
    Projects.postTask(task)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Error creating new task' });
    });
  });

  router.post('/resources', (req, res) => {
    const resource = req.body;
  
    Projects.postResources(resource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Error creating new resource' });
    });
  });

module.exports = router;