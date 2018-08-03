const express = require('express');

const projectsDb = require('./helpers/projectsDb');
const actionsDb = require('./helpers/actionsDb');

const server = express();

server.use(express.json());

// Projects
server.get('/projects', (req, res) => {
    projectsDb.read()
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(err => res.status(500).json(err));
});
server.post('/projects', (req, res) => {
    const { name, description, completed } = req.body;
    projectsDb.create({ name, description, completed })
      .then(response => res.status(201).json(response))
      .catch(err => res.status(500).json({ error: "There was an error while saving the project to the database" }))
});

// Actions
server.get('/actions', (req, res) => {
    actionsDb.read()
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(err => res.status(500).json(err));
});
server.post('/actions', (req, res) => {
    const { project_id, description, notes, completed } = req.body;
    actionsDb.create({ project_id, description, notes, completed })
      .then(response => res.status(201).json(response))
      .catch(err => res.status(500).json({ error: "There was an error while saving the action to the database" }))
});

server.listen(8000, () => console.log('API is running on 8000'));