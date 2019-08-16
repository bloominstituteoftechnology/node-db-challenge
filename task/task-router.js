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
            res.status(500).json({ message: 'failed to get task' })
        })
});

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