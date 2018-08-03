const actions = require('express').Router()
const db = require('../data/db')

actions.post('/', async (req, res, next) => {
  checkActionBody(req, next)

  const { body: action } = req

  try {
    const ids = await db('actions').insert(action)
    res.status(200).json({ id: ids[0], ...action })
  } catch(e) {
    sendError(500, e.message, next)
  }
})

actions.get('/', async (req, res, next) => {
  try {
    const actions = await db('actions')
    res.status(200).json(actions)
  } catch(e) {
    sendError(500, e.message, next)
  }
})

actions.get('/:id', async (req, res, next) => {
  const id = +req.params.id

  try {
    let action = await db('actions')
      .where('id', '=', id)
    
    action = action[0]

    res.status(200).json(action)
  } catch(e) {
    sendError(500, e.message, next)
  }
})

actions.put('/:id', async (req, res) => {
  const id = +req.params.id
  const { body: action } = req

  try {
    const updated = await db('actions')
      .where('id', '=', id)
      .update(action)

    res.status(200).json({ id, ...action })
  } catch(e) {
    sendError(500, e.message, next)
  }
})

actions.delete('/:id', async (req, res) => {
  const id = +req.params.id

  try {
    const deleted = await db('actions')
      .where('id', '=', id)
      .del()

    res.status(200).send(`[Action: ${id}] successfully deleted`)
  } catch(e) {
    sendError(500, e.message, next) 
  }
})

actions.use((err, req, res, next) => {
  res.status(err.code).json({
    error: err.code,
    message: err.message
  })
})

function checkActionBody (req, next) {
  if (!req.body 
      || !req.body.projectId 
      || !req.body.description) {
    sendError(400, "please provide projectId and description", next)
  }
}

function sendError (code, message, next) {
  next({code, message})
}

module.exports = actions
