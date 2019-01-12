const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile.js');

const server = express();
const port = 5050;
const db = knex(dbConfig.development);

server.use(express.json());

server.post('/api/projects', (req, res) => {
  const project = req.body;
  db('projects')
    .insert(project)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to insert project' });
    });
});

server.post('/api/actions', (req, res) => {
  const action = req.body;
  db('actions')
    .insert(action)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to insert action' });
    });
});

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .leftJoin('actions', 'project_id', 'projects.id')
    .where('id', id)
    .then((projectInfo) => {
      res.send(projectInfo);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to find project' });
    });
});

server.listen(port, () => {
  console.log(`\n*** Web API listening on http://localhost:${port} ***\n`);
});
