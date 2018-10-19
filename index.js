const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here
server.get('/', (req, res) => {
  res.send('It is working!');
});

// read all projects
server.get('/api/projects', (req, res) => {
  db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// read projects by id
server.get('/api/projects/:id', (req, res) => {
  const id = req.params.id;
  db('projects').where({ id })
    .then(project => {
      if (project) {
        res.status(200).json(project[0]);
      } else {
        res.status(404).json({ message: 'project not found' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// get all actions by project
server.get('/api/projects/:id/actions', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ project_id: id })
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// create projects
server.post('/api/projects', (req, res) => {
  const project = req.body;
  db.insert(project)
    .into('projects')
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// update projects
server.put('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const newProject = req.body;
  db('projects')
    .where({ id })
    .update(newProject)
    .then(project => {
      if (!project || project < 1) {
        res.status(404).json({ message: 'No records found to update' });
      } else {
        res.status(200).json(project);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});



// read all actions
server.get('/api/actions', (req, res) => {
  db('actions')
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// create actions
server.post('/api/actions', (req, res) => {
  const action = req.body;
  db.insert(action)
    .into('actions')
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});



// listening port
const port = 5000;
server.listen(port, function() {
  console.log(`\n=== API listening on port ${port} ===\n`);
});