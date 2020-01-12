const express = require('express');

const TaskModel = require('./tasksModel');

const router = express.Router();

// post equals find, find all tasks
router.get('/', (req, res) => {
    TaskModel.findAll()
    .then(tasks => {
        res.status(200).json(tasks);
    })
     .catch(error) 
            res.status(500).json
        ({ message: 'Tasks not found', error });
    });

    // post equals add, add a new task
    router.post('/', (req, res) => {
        const newTask = req.body;
        debug('tasks')
        .insert(newTask)
        .then(tasks => {
            res.status(201).json(tasks);
        })
         .catch(error) 
                res.status(500).json
            ({ message: 'New task not created', error });
        });


    module.exports = router;