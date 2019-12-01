const db = require('../data/db-config')
const express = require('express')
const tasksdb = require('./tasksmodel')

const router = express.Router();



router.get('/', (req, res) => {
    tasksdb.get()
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({ error: "there was an error" })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.body.id
    console.log(req.body)
    tasksdb.getById(id)
        .then(task => {
            res.status(201).json({ message: "it worked" })
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


router.post('/', (req, res) => {
    const taskObj = req.body;
    tasksdb.insert(taskObj)
        .then(task => {
            res.status(201).json({ message: "task updated" })
        })
        .catch(err => {
            res.status(201).json(err)
        })
})


module.exports = router;