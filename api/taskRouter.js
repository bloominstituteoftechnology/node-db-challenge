const express = require('express');
const Tasks = require('./taskModel')

const router = express.Router()

router.get('/', (req, res) => {
    Tasks.getTask()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log("GET Task", err)
            res.status(500).json({ message: 'Failed to get list of Tasks' })
        })
});

router.post('/', (req, res) => {
    const newTask = req.body
    Tasks.insert(newTask)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            console.log("POST task", err)
            res.status(500).json({ error: "Could not save the task to the database" })
        })

})


module.exports = router