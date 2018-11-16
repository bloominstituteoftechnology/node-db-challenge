
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

app.post('/api/zoos', (req, res) => {
  const zoo = req.body;
  db('zoos')
    .insert(zoo)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error inserting', err });
    });
});


app.get('/api/zoos/:zooid', (req, res) => {
  const { zooid } = req.params;

  db('zoos')
    .where({ id: zooid })
    .then(zoo => {
      res.status(201).json({ zoo });
    })
    .catch(err => res.status(500).json(err));
});

app.put('/api/zoos/:zooid', (req, res) => {
  const changes = req.body;
  const { zooid } = req.params;

  db('zoos')
    .where({ id: zooid })
    .update(changes)
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => res.status(500).json(err));
});


app.delete('/api/zoos/:zooid', (req, res) => {
  const { zooid } = req.params;

  db('zoos')
    .where({ id: zooid })
    .del()
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => res.status(500).json(err));
});



module.exports = app;   