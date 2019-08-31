// Bring in express router
// --------------------------------------------|
const router = require('express').Router()

// Bring in DB Helper Methods
// --------------------------------------------|
const Tasks = require('./tasks-model.js')

// GET Request - Get all tasks from db
// --------------------------------------------|
router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.find()

    res.json(tasks)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get tasks'
    })
  }
})

// GET Request - Get task from db by id
// --------------------------------------------|
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const task = await Tasks.findById(id)

    if (task) {
      res.json(task)
    } else {
      res.status(404).json({
        message: 'Invalid Task ID'
      })
    }
  } catch {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get task'
    })
  }
})

// Export Router
// --------------------------------------------|
module.exports = router
