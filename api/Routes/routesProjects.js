const server = require('express')()
const db = require('../../data/dbConfig')

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params
  db
    .select('P.id', 'P.name', 'P.description', 'P.completed')
    .from('Projects as p')
    .where({ 'p.id': id })
    .then((project) => {
      db('actions')
        .where({ project_id: id })
        .then((actions) => {
          console.log(actions)
          project[0]['actions'] = actions
          res.status(200).json(project[0])
        })
        .catch((err) => res.status(500).json(err.message))
    })
    .catch((err) => res.status(500).json(err.message))
})
server.get('/api/projects', (req, res) => {
  db('projects')
    .then((projects) => {
      res.status(200).json(projects)
    })
    .catch((err) => res.status(500).json(err))
})
module.exports = server
