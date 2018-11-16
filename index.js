const express = require('express');
const server = express();

server.use(express.json());

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

//sanity check
server.get('/', (req, res) => {
  res.json({ api: 'are you ready to be productive?' });
});

//GET projects
server.get('/api/projects', (req, res) => {
  db('projects')
    .then(projects => res.status(200).json(projects))
    .catch(err =>
      res.status(500).json({
        message: 'The projects could not be retrieved.',
        error: err
      })
    );
});

//POST project
server.post('/api/projects', (req, res) => {
  const project = req.body;
  db('projects')
    .insert(project)
    .returning('id')
    .then(id => res.status(201).json(id))
    .catch(err =>
      res
        .status(400)
        .json({ message: 'Your project could not be added.', error: err })
    );
});

//POST action
server.post('/api/actions', (req, res) => {
  const action = req.body;
  db('actions')
    .insert(action)
    .returning('id')
    .then(id => res.status(201).json(id))
    .catch(err =>
      res
        .status(400)
        .json({ message: 'Your action could not be added.', error: err })
    );
});

//GET project by id
server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id })
    .then(project => {
      return db('actions')
        .select(
          'actions.id',
          'actions.description',
          'actions.notes',
          'actions.complete'
        )
        .where({ project_id: id })
        .then(actions => res.status(200).json([...project, { actions }]));
    })
    .catch(err =>
      res
        .status(404)
        .json({ message: 'The project could not be found.', error: err })
    );
});

const port = 7000;
server.listen(port, function() {
  console.log(`\n=== Web API listening on http://localhost:${port} ===\n`);
});
