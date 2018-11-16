const express = require('express')
// const knex = require('knex')
// const knexConfig = require('./knexfile.js')
// const db = knex(knexConfig.development)
const db = require('./data/dbMethods.js')

const server = express()

server.use(express.json())

server.post('/api/projects', (req, res) => {
  const { name } = req.body

  if (!name) {
    res.status(400).json({ message: 'Cannot save project without a name' })
  }

  db.postProject(req.body)
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

  db.postAction(req.body).catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params

  db.getProjectById(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
})

server.get('/api/projects', (req, res) => {
  db.getAllProjects()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
})

server.listen(9000, () => console.log('\n== Port 9k ==\n'))
