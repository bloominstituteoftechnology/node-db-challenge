const express = require('express');
const server = express();
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex (knexConfig.development);

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.post('/api/projects', (req, res) => {
  const project = req.body;
  db('projects')
    .insert(project)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({
        message: 'error with your insert.',
        err
      });
    });
});

server.post('/api/actions', (req, res) => {
  const action = req.body;
  db('actions')
    .insert(action)
    .into('actions')
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => {
      res.status(500).json({ message: 'There was an error', err });
    });
});

server.get('/api/projects', (req, res) => {
  db('projects')
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'error', err });
    });
});

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id })
    .first()
    .then(project => {
      db('actions')
        .where({ project_id: id })
        .then(actions => {
          project.actions = actions;
          res.status(200).json(project);
        });
    })
    .catch(err => {
      res.status(500).json({ message: 'error', err });
    });
});

server.listen(9000, () => console.log("It's ALIVE!!!"));

