const express = require('express')

const router = express.Router()

const DB_Task = require('../data/DBAccess.js')

router.get('/', (req, res) => {
  DB_Task.getTasks()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to fetch Tasks' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  DB_Task.getTask(id)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to fetch task' })
    })
})

router.post('/', (req, res) => {
  const task = req.body
  DB_Task.postTask(task)
    .then(task => {
      res.status(201).json({ message: 'Successfully added task', task: task })
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to add new task' })
    })
})

module.exports = router

