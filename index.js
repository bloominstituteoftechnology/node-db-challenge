const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/projects', (req, res) => {
  db('projects')
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id })
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.post('/projects', (req, res) => {
  const project = req.body;
  db('projects')
    .insert(project)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

const port = 5000;
server.listen(port, () => {
  console.log(`server on http://localhost:${port}`);
});
