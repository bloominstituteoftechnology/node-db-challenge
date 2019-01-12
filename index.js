const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);
const PORT = 5050;

server.use(express.json());

//endpoints for projects

server.post('/projects', (req, res) => {
    const project = req.body;
    db('projects').insert(project)
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to create project' });
        });
});

server.get('/projects/:id', (req, res) => {
    const {id} = req.params;
    db('projects').where('id', id)
    .then(rows => {
      res.json(rows);
    }).catch(err => {
      res.status(500).json({err: 'Failed to get project'});
    })
  });

//endpoints for actions

server.post('/actions', (req, res) => {
    const action = req.body;
    db('actions').insert(action)
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to create action' });
        });
});

//listening
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});