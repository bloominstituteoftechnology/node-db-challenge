const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find() 
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(error => {
        res.status(500).json({error: 'error'})
    })
})

router.post('/', (req, res) => {
    const projData = req.body;
    console.log(projData)
    Projects.add(projData)
    .then(project => [
        res.status(200).json(project)
    ])
    .catch(error => {
        res.status(500).json({error: 'error'})
    })
})

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params; 
    Projects.findTasks(id)
    .then(tasks => {
        if(tasks.length) {
            res.status(200).json(tasks)
        } else {
            res.status(404).json({error: 'error'})
        }
    })
    .catch(error => {
        res.status(500).json({error: 'error'})
    })
})
 
router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const {id} = req.params

    Projects.findById(id)
    .then(project => {
        if(project) {
            Projects.addTask(taskData, id)
            .then(task => {
                res.status(200).json(task)
        })
        } else {
            res.status(404).json({error: 'error'})
        }
    })
    .catch(error => {
        res.status(500).json({error: 'error'})
    })
})

module.exports = router;