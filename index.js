const express = require('express');
const app = express();
const Project = require('./projectHelpers');
const Action = require('./actionHelpers');
const db = require('./db');

app.use(express.json());

app.get('/projects', (req, res) => {
  Project.find()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(400).json(err));
});

app.get('/projects/:id', (req, res) => {
  Project.findById(req.params.id)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(400).json(err));
});

app.post('/projects', (req, res) => {
  const project = req.body;
  Project.insert(project)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(400).json(err));
});

app.put('/projects/:id', (req, res) => {
  const project = req.body;
  const { id } = req.params;

  Project.update(id, project)
    .then(count =>
      res
        .status(200)
        .json({ message: 'You have successfully udpated the project' })
    )
    .catch(err => res.status(400).json(err));
});

app.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  Project.remove(id)
    .then(count =>
      res.status(200).json({ message: 'You have successfully deleted project' })
    )
    .catch(err => res.status(400).json(err));
});

app.get('/projects/:id/actions', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  let project = {};
  try {
    found = await db('projects').where({ id });
    console.log(found);
    project = found[0];
    actions = await db('actions').where({ project_id: id });
    project.actions = actions;
    res.status(200).json(project);
  } catch (e) {
    res.status(400).json(e);
  }
});

// Action routes

app.get('/actions', (req, res) => {
  Action.find()
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(400).json(err));
});

app.get('/actions/:id', (req, res) => {
  Action.findById(req.params.id)
    .then(action => res.status(200).json(action))
    .catch(err => res.status(400).json(err));
});

app.post('/actions', (req, res) => {
  const action = req.body;
  Action.insert(action)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(400).json(err));
});

app.put('/actions/:id', (req, res) => {
  const action = req.body;
  const { id } = req.params;

  Action.update(id, action)
    .then(count =>
      res
        .status(200)
        .json({ message: 'You have successfully udpated the action' })
    )
    .catch(err => res.status(400).json(err));
});

app.delete('/actions/:id', (req, res) => {
  const { id } = req.params;

  Action.remove(id)
    .then(count =>
      res.status(200).json({ message: 'You have successfully deleted action' })
    )
    .catch(err => res.status(400).json(err));
});

app.listen(8000, () => {
  console.log('Server running on PORT 8000');
});
