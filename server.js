const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')

const db = require('./data/db')

const PORT = 4040

const server = express()

server.use(express.json())
server.use(logger('dev'))
server.use(helmet())

server.get('/', (req, res) => {
  res.status(200).send('Server Listens and Obeys')
})

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params
  const query01 = db('project').where({ id })
  const query02 = db('action').select('id', 'name', 'description', 'completed').where('projectId', id)
  Promise.all([query01, query02]).then(values => {
    let [project, action] = values
    project = project[0]
    res.status(200).json({ ...project, actions: action })
  })
})

server.get('/api/actions/:id', (req, res) => {
  const { id } = req.params

  db('action as a')
    .where('a.id', id)
    .join('action_context as ac', 'ac.actionId', 'a.id')
    .join('context as c', 'c.id', 'ac.contextId')
    .then(actions => res.status(200).json(actions.map(action => action.context)))
})

server.listen(PORT, () => {
  return console.log(`\n=== Server Online and Running on PORT ${PORT}.===\n=== Keep Coding Strong ===\n`)
})
