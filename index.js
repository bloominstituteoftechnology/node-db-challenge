const express = require('express');

const db = require('./data/db');

const server = express();
server.use(express.json())

const PORT = 8000;

//==========Projects==========

server.post('/projects', (req, res) => {
  const project = req.body;
  db.insert(project).into('projects')
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

server.get('/projects', (req, res) => {
  db('projects')
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

server.listen(PORT, () => {
  console.log(`Up and running on ${PORT}`)
})
