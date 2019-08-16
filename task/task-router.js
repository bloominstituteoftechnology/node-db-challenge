const express = require('express');

const taskRouter = require('./task-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    taskRouter
        .find()
        .then(task => {
            res.status(200).json(task);
        })
        .catch(error => {
            res.status(500).json({ message: 'failed to get resource' })
        })
});


router.get('/:id', (req, res) => {
    taskRouter
        .where({ id })
        .first()
        .then(task => {
            if (task) {
                return taskRouter(id).then(task => {
                    project.task = task
                    return project;
                })
            } else {
                return null

            }

        })
})
router.post('/', (req, res) => {
    const description = req.body
    const notes = req.body
    const task_id = req.body
    res.status(201).json(description, notes, task_id);
})
error => {
    res.status(500).json({ message: 'failed to post task' })
};



module.exports = router;