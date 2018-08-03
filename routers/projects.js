const projects = require('express').Router()
const db = require('../data/db')

projects.post('/', async (req, res, next) => {
  checkProjectBody(req, next)

  const { body: project } = req
  
  try {
    const ids = await db('projects').insert(project)
    res.status(200).json({ id: ids[0], ...project })
  } catch(e) {
    sendError(500, e.message, next)
  }
})

projects.get('/', async (req, res, next) => {
  try {
    const projects = await db('projects')
    res.status(200).json(projects)
  } catch(e) {
    sendError(500, e.message, next)
  }
})

projects.get('/:id', async (req, res, next) => {
  const id = +req.params.id

  try {
    let project = await db('projects')
      .where('id', '=', id)
   
    project = project[0]

    const actions = await db('actions')
      .where('projectId', '=', id)

    res.status(200).json({ ...project, actions })
  } catch(e) {
    sendError(500, e.message, next)
  }
})

projects.put('/:id', async (req, res, next) => {
  const id = +req.params.id
  const { body: project } = req

  try {
    const updated = await db('projects')
      .where('id', '=', id)
      .update(project)

    res.status(200).json({ id, ...project })
  } catch(e) {
    sendError(500, e.message, next)
  }
})

projects.delete('/:id', async (req, res, next) => {
  const id = +req.params.id

  try {
    const deleted = await db('projects')
      .where('id', '=', id)
      .del()

    res.status(200).send(`[Project: ${id}] successfully deleted!`)
  } catch(e) {
    sendError(500, e.message, next)
  }
})

projects.use((err, req, res, next) => {
  res.status(err.code).json({
    error: err.code,
    message: err.message
  })
})

function checkProjectBody (req, next) {
  if (!req.body 
      || !req.body.name 
      || !req.body.description) {
    sendError(400, "please provide name and description", next)
  }
}

function sendError (code, message, next) {
  next({code, message})
}

module.exports = projects
