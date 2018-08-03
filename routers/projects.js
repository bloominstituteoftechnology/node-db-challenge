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
