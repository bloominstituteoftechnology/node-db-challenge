const express = require('express');
const server = express();
const port = 3300;

const projectDb = require('./data/helpers/projectModel');
const actionDb = require('./data/helpers/actionModel');

server.use(express.json());

// endpoints
// test
server.get('/', (_, res) => {
  res.status(200).json({ api: 'running' });
});

// api/projects
server.get('/api/projects', (_, res) => {
  projectDb.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: '500 error fetching', err });
    })
});

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;

  projectDb.getWithActions(id)
    .then(action => {
      projectDb.get(id)
        .then(project => {
          project.actions = action;
          res.status(200).json(project);
        })
        .catch(err => {
          res.status(500).json({ message: '500 Error fetching', err });
        });
    })
    .catch(err => {
      res.status(500).json({ message: '500 error fetching', err });
    });
});

server.post('/api/projects', (req, res) => {
  const { name, description } = req.body;

  projectDb.insert({ name, description })
    .then(id => {
      res.status(201).json({ message: `ID ${id} created` });
    })
    .catch(err => {
      res.status(500).json({ message: '500 error creating', err });
    })
});

// api/actions
server.get('/api/actions', (_, res) => {
  actionDb.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ message: '500 error fetching', err });
    })
});

server.post('/api/actions', (req, res) => {
  const { description, notes, project_id } = req.body;

  actionDb.insert({ description, notes, project_id })
    .then(id => {
      res.status(201).json({ message: `ID ${id} created` });
    })
    .catch(err => {
      res.status(500).json({ message: '500 error creating', err })
    })
});

server.listen(port, () => console.log(`Listening to port: ${port}`));
