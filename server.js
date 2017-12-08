const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./db.js');
const sqlite = require('sqlite3');

const server = express();

server.use(bodyParser.json());

server.post('/projects', function(req, res) {
  const project = req.body;
  knex
    .insert(project)
    .into('projects')
    .then(function(project) {
      res.status(201).json({ project });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The project already exists'});
      } else {
        res.status(500).json(err);
      }
    })
});

server.get('/projects', function(req, res) {
  const projects = knex('projects')
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    })
});

server.post('/actions', function(req, res) {
  const action = req.body;
  knex
    .insert(action)
    .into('actions')
    .then(function(action) {
      res.status(201).json({ action });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The action already exists'});
      } else {
        res.status(500).json(err);
      }
    })
});

server.get('/actions', function(req, res) {
  const actions = knex('actions')
    .then(function(actions) {
      res.status(200).json(actions);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    })
});

server.post('/contexts', function(req, res) {
  const context = req.body;
  knex
    .insert(context)
    .into('contexts')
    .then(function(context) {
      res.status(201).json({ context });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The action already exists'});
      } else {
        res.status(500).json(err);
      }
    })
});

server.get('/contexts', function(req, res) {
  const contexts = knex('contexts')
    .then(function(contexts) {
      res.status(200).json(contexts);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    })
});

const port = 3000;
server.listen(port, function() {
  console.log(`Server listening on port ${port}`);
})