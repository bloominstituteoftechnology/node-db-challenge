const express = require('express')
const knex = require('knex')
const knexConfig = require('./knexfile')
const db = knex(knexConfig.development)
const server = express()
const PORT = 5100

server.use(express.json())

server.get('/api/actions', (req, res) => {
  db('actions')
    .then(actions => {
      res.json(actions)
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: 'The actions information can not be retrieved.' })
    })
})

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params
  db('projects')
    .where('projects.id', id)
    .then(project => {
      const thisProject = project[0]
      db('actions')
        .select(
          'actions.id',
          'actions.todo_description',
          'actions.notes',
          'actions.is_completed',
          'actions.project_id'
        )
        .where('actions.project_id', id)
        .then(actions => {
          res.json({
            id: thisProject.id,
            name: thisProject.name,
            description: thisProject.description,
            is_complete: thisProject.is_complete,
            actions: actions
          })
        })
    })
    .catch(() => {
      res
        .status(404)
        .json({ error: 'Info about this action could not be retrieved.' })
    })
})

server.post('/api/projects', (req, res) => {
  const project = req.body
  if (project.name) {
    db('projects')
      .insert(project)
      .then(ids => {
        res.status(201).json({ ids: ids[0] })
      })
      .catch(() => {
        res
          .status(500)
          .json({ error: 'Failed to insert project into database' })
      })
  } else {
    res.status(400).json({
      error: 'Please provide all fields.'
    })
  }
})

server.post('/api/actions', (req, res) => {
  const action = req.body
  if (action.todo_description) {
    db('actions')
      .select(action.project_id)
      .then(projects => {
        if (projects) {
          db('actions')
            .insert(action)
            .then(ids => {
              res.status(201).json(ids)
            })
            .catch(() => {
              res
                .status(500)
                .json({ error: 'Failed to insert action into database' })
            })
        } else {
          res.status(400).json({
            error: 'Please provide all fields.'
          })
        }
      })
  }
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
