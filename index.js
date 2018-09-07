const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Api running...')
});

server.get('/projects', (req, res) => {
  db('projects').then(projects => {
    res.status(200).json(projects);
  }).catch(err => {
    res.status(500).json(err)
  })
});

server.get('/actions', (req, res) => {
  db('actions').then(actions => {
    res.status(200).json(actions);
  }).catch(err => {
    res.status(500).json(err);
  })
});

server.post('/projects', (req, res) => {
  db.insert(req.body).into('projects').then(ids => {
    res.status(201).json(ids)
  }).catch(err => {
    res.status(500).json(err);
  });
});

server.post('/actions', (req, res) => {
  db.insert(req.body).into('actions').then(ids => {
    res.status(201).json(ids);
  }).catch(err => {
    res.status(500).json(err);
  });
});

server.get('/projects/:id', (req, res) => {
  const projActionView = db('projects').join('actions', {'projects.id': 'actions.project_id'});

  projActionView.select().where('project.id', parseInt(req.params.id)).then(project => {
    res.status(200).json(project);
  }).catch(err => {
    res.status(500).json(err);
  });
});

server.listen(8500);
