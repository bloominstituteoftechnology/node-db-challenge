const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const server = express();

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
  res.send('Your API is running.');
});

// Projects Routes
server.get('/projects', (req, res) => {
  db('projects')
    .then(projects => res.status(200).json(projects))
    .catch(err =>
      res.status(500).json({ errorMsg: 'Could not get projects.' })
    );
});

// Endpoint Retrieving Project by ID that also includes its actions
server.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  db('projects')
    .where('id', '=', id)
    .then(project => {
      if (project) {
        db('actions')
          .where({ project_id: id })
          .then(actions => {
            res.status(200).json({ project, actions });
          })
          .catch( err =>
            res
              .status(500)
              .json({ errorMsg: 'Unable to get the project with that id.' }));
      }
      else{
        res.status(404).json({errorMsg: 'Project not found.'})
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ errorMsg: 'Unable to get the project with that id.' })
    );
});

server.post('/projects', (req, res) => {
  const project = req.body;

  if (!project) {
    res.status(400).json({
      errorMsg: 'Please fill in the required information for your project.'
    });
  }
  db.insert(project)
    .into('projects')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err =>
      res.status(500).json({ errorMsg: 'Could not add project to projects.' })
    );
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = req.body;

  db('projects')
    .where('id', '=', id)
    .update(project)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err =>
      res.status(500).json({ errorMsg: 'Unable to edit project with that id.' })
    );
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  db('projects')
    .where('id', '=', id)
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err =>
      res
        .status(500)
        .json({ errorMsg: 'Unable to delete project with that id.' })
    );
});

// Actions Routes
server.get('/actions', (req, res) => {
  db('actions')
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json({ errorMsg: 'Could not get actions.' }));
});

server.get('/actions/:id', (req, res) => {
  const { id } = req.params;

  db('actions')
    .where('id', '=', id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err =>
      res
        .status(500)
        .json({ errorMsg: 'Unable to get the action with that id.' })
    );
});

server.post('/actions', (req, res) => {
  const action = req.body;

  if (!action) {
    res.status(400).json({
      errorMsg: 'Please fill in the required information for your action.'
    });
  }
  db.insert(action)
    .into('actions')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err =>
      res.status(500).json({ errorMsg: 'Could not add action to actions.' })
    );
});

server.put('/actions/:id', (req, res) => {
  const { id } = req.params;
  const action = req.body;

  db('actions')
    .where('id', '=', id)
    .update(action)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err =>
      res.status(500).json({ errorMsg: 'Unable to edit action with that id.' })
    );
});

server.delete('/actions/:id', (req, res) => {
  const { id } = req.params;

  db('actions')
    .where('id', '=', id)
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err =>
      res
        .status(500)
        .json({ errorMsg: 'Unable to delete action with that id.' })
    );
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
