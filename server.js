const express = require('express');
const bodyParser = require('body-parser');

const sqlite = require('sqlite3');
const knex = require('knex');
const db = require('./db.js');

const server = express();
// gets
server.get('/projects', (req, res) => {
  db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});
server.get('/actions', (req, res) => {
  db('actions')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});
server.get('/contexts', (req, res) => {
  db('contexts')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});
server.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where('id', id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});
// posts
server.post('/projects', (req, res) => {
  const project = req.body;
  db
    .insert(project)
    .into('projects')
    .then(project => {
      res.status(200).json({ success: `${project} added!` });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});
server.post('/actions', (req, res) => {
  const action = req.body;
  db
    .insert(action)
    .into('actions')
    .then(action => {
      res.status(200).json({ success: `${action} added!` });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});
server.post('/contexts', (req, res) => {
  const context = req.body;
  db
    .insert(context)
    .into('contexts')
    .then(context => {
      res.status(200).json({ success: `${context} added!` });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

// deletes
server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where('id', id)
    .del()
    .then(project => {
      res.status(200).json({ success: `project with id ${id} removed` });
    })
    .catch(err => {
      res.status(500).json({ fail: err });
    });
});
server.delete('/actions/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where('id', id)
    .del()
    .then(project => {
      res.status(200).json({ success: `action with id ${id} removed` });
    })
    .catch(err => {
      res.status(500).json({ fail: err });
    });
});
server.delete('/contexts/:id', (req, res) => {
  const { id } = req.params;
  db('contexts')
    .where('id', id)
    .del()
    .then(project => {
      res.status(200).json({ success: `context with id ${id} removed` });
    })
    .catch(err => {
      res.status(500).json({ fail: err });
    });
});

const port = 7575;
server.listen(port, function() {
  console.log(`Server Listening on ${port}`);
});
