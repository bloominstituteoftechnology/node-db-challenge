const express = require('express');
const knex = require('knex');

const db_config = require('./knexfile');

const server = express();
const db = knex(db_config.development);

server.use(express.json());

//endpoints

//POST for adding projects
server.post('/api/projects', (req, res) => {
  const project = req.body;
  db('projects').insert(project)
    .then(ids => {
      res.status(201).json(ids) //201 = created
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to create project' })
    })
})

//POST for adding actions
server.post('/api/actions', (req, res) => {
  const action = req.body;
  db('actions').insert(action)
    .then(ids => {
      res.status(201).json(ids)
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to create action' })
    })
})

//GET for retrieving a project by its ID
server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects').where('id', id)
    .then(rows => {
      res.json(rows);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to find project' })
    })
})

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})