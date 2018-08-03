const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('up and running...');
});


// ! ====== Projects

server.post('/projects', (req, res) => {
  const project = req.body;
  console.log(project)
  db
    .insert(project)
    .into('projects')
    .then(ids => {
      const id = ids[0]
      res.status(201).json({ id, ...user})
    })
    .catch(err => res.status(500).json(err));
});

server.get('/projects', (req, res) => {
  db('projects')
    .then(project => {
      res.status(200).json(project);
    })
    .catch((err) => res.status(500).json(err));
});

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id })
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch((err) => res.status(500).json(err));
});


const port = 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on port ${port} ===\n`);
});