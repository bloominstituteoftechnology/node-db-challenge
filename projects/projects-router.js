// Bring in express router
// --------------------------------------------|
const router = require('express').Router()

// Bring in DB Helper Methods
// --------------------------------------------|
const Projects = require('./projects-model.js')

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
  } catch {
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
  } catch {
    console.log(err)
    res.status(500).json({
      message: 'Failed to add project'
    })
  }
})

// Export Router
// --------------------------------------------|
module.exports = router
