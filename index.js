const express = require('express')
const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)

const server = express()

server.use(express.json())

server.post('/api/projects', (req, res) => {
  const { name } = req.body

  if (!name) {
    res.status(400).json({ message: 'Cannot save project without a name' })
  }

  db('projects')
    .insert(req.body)
    .then(count => res.status(201).json(count))
    .catch(err => res.status(500).json(err))
})

server.post('/api/actions', (req, res) => {
  const { description, project_id } = req.body

  if (!description || !project_id) {
    res
      .status(400)
      .json({ message: 'Missing field(s) description and/or project id' })
  }

  db('actions')
    .insert(req.body)
    .then(count => res.status(201).json(count))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

server.get('/api/projects/:id', async (req, res) => {
  const { id } = req.params

  try {
    const project = await db('projects')
      .where({ id })
      .then(info =>
        info.map(item => ({ ...item, completed: item.completed === 1 }))
      )

    const actions = await db('projects')
      .join('actions', { 'projects.id': 'actions.project_id' })
      .select(
        'actions.id',
        'actions.description',
        'actions.notes',
        'actions.completed'
      )
      .where({ 'projects.id': id })
      .then(info =>
        info.map(item => ({ ...item, completed: item.completed === 1 }))
      )

    const data = { ...project[0], actions }

    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

server.listen(9000, () => console.log('\n== Port 9k ==\n'))
