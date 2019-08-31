// Bring in express router
// --------------------------------------------|
const router = require('express').Router()

// Bring in DB Helper Methods
// --------------------------------------------|
const Projects = require('./projects-model.js')
const Tasks = require('../tasks/tasks-model.js')

// GET Request - Get all projects from db
// --------------------------------------------|
router.get('/', async (req, res) => {
  try {
    const projects = await Projects.find()

    res.json(projects)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get projects'
    })
  }
})

// GET Request - Get project from db by id
// --------------------------------------------|
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const project = await Projects.findById(id)

    if (project) {
      res.json(project)
    } else {
      res.status(404).json({
        message: 'Invalid Project ID'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get project'
    })
  }
})

// POST Request - Add new project to db
// --------------------------------------------|
router.post('/', async (req, res) => {
  let newProject = req.body

  // default the completed field to false
  if (!req.body.completed || req.body.completed === null) {
    newProject = { ...req.body, completed: false }
  }

  try {
    const addedProject = await Projects.add(newProject)

    // convert completed field api response to a boolean
    addedProject.completed = Boolean(addedProject.completed)

    res.status(201).json(addedProject)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to add project'
    })
  }
})

// POST Request - Add new task to project
// --------------------------------------------|
router.post('/:id/tasks', async (req, res) => {
  const proj_id = Number(req.params.id)
  let newTask = { ...req.body, proj_id }

  console.log(newTask)

  // default the completed field to false
  if (!req.body.completed || req.body.completed === null) {
    newTask = { ...newTask, completed: false }
  }
  console.log(newTask)

  try {
    const addedTask = await Tasks.add(newTask)

    // convert completed field api response to a boolean
    addedTask.completed = Boolean(addedTask.completed)

    res.status(201).json(addedTask)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to add task'
    })
  }
})

// Export Router
// --------------------------------------------|
module.exports = router
