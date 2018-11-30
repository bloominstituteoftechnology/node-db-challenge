const express = require('express');
const knex = require('knex');

const server = express();
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

server.use(express.json());


server.get('/api/projects', (req, res) => {
  db('project')
  .then(projects => {
    res.status(200).json(projects)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

server.get('/api/actions', (req, res) => {
  db('action')
  .then(actions => {
    res.status(200).json(actions)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})




const port = 3300;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));