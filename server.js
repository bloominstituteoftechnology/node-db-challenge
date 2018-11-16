
const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const app = express();

app.use(express.json());

app.get('/api/projects', (req, res) => {
  db('projects')
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

app.get('/api/actions', (req, res) => {
  db('actions')
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err));
});


// app.get('/api/projects/:id', (req, res) => {
//   const { id } = req.params;
//   db('zoos')
//     .then(zoos => res.status(200).json(zoos))
//     .catch(err => res.status(500).json(err));
// });

app.post('/api/projects', (req, res) => {
  const project = req.body;
  db('projects')
    .insert(project)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error inserting', err });
    });
});

app.post('/api/actions', (req, res) => {
  const action = req.body;
  db('actions')
    .insert(action)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error inserting', err });
    });
});

app.get('/api/actions/:id', (req, res) => {
  const { id } = req.params;

  db('actions')
    .where({ id: id })
    .then(action => {
      res.status(201).json({ action });
    })
    .catch(err => res.status(500).json(err));
});

app.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;

  db('projects')
    .where({ id: id })
    .leftJoin('actions', 'actions.projectId', '=', id)
    .then(action => {
      res.status(201).json({ action });
    })
    .catch(err => res.status(500).json(err));
});


app.delete('/api/actions/:id', (req, res) => {
  const { id } = req.params;

  db('actions')
    .where({ id: id })
    .del()
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => res.status(500).json(err));
});

app.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;

  db('projects')
    .where({ id: id })
    .del()
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = app;   