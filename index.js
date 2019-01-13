const express = require('express');

const knex = require('knex');
const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);
const PORT = process.env.PORT || 5500;

server.use(express.json());

// PROJECTS
// POST = INSERT INTO projects (id, name, description,flag) VALUES ('','','','')
server.post('/api/d2rd-projects', (req, res) => {
  const project = req.body;
  if (project.name) {
    db('d2rd-projects').insert(project)
    .then(ids => {
      res.status(201).json(ids)
    })
    .catch(err => {
      res.status(500).json({err: 'Failed to insert project'})
    })
  }
});

//GET ALL = SELECT * FROM d2rd-projects
server.get('/d2rd-projects', (req, res) => {
  db('d2rd-projects').then(rows => {
    res.json(rows);
  }).catch(err => {
    res.status(500).json({err: 'Failed to find projects'});
  });
});


// ACTIONS
// POST = INSERT INTO actions (id, description,notes, flag) VALUES ('','','','')
server.post('/api/actions', (req, res) => {
  const action = req.body;
  if (action.description) {
    db('actions').insert(action)
    .then(ids => {
      res.status(201).json(ids)
    })
    .catch(err => {
      res.status(500).json({err: 'Failed to insert action'})
    })
  }
});

//GET ALL = SELECT * FROM actions
server.get('/actions', (req, res) => {
  db('actions').then(rows => {
    res.json(rows);
  }).catch(err => {
    res.status(500).json({err: 'Failed to find actions'});
  });
});