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
server.delete('/projects/:id', (req, res) => {
    projectsDb.destroy(req.params.id)
      .then(response => {
        if (!response) {
          res.status(404).json({ message: "The project with the ID does not exist." })
        } else {
          res.status(200).json({ message: "The project has been deleted." })
        }
      })
      .catch(err => res.status(500).json({ error: "The project could not be removed." }))
});
server.put('/projects/:id', (req, res) => {
    const { name, description, completed } = req.body;
    if (!name || !description) {
      res.status(400).json({ errorMessage: "Please provide name and description for the project." })
    }
    projectsDb.update(req.params.id, { name, description, completed })
      .then(response => {
        if (response === null) {
          res.status(404).json({ message: "The project with the specified ID does not exist." })
        } else {
          res.status(200).json({ response });
        }
      })
      .catch(err => res.status(500).json({ error: "The project could not be updated" }))
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
server.delete('/actions/:id', (req, res) => {
    actionsDb.destroy(req.params.id)
      .then(response => {
        if (!response) {
          res.status(404).json({ message: "The action with the ID does not exist." })
        } else {
          res.status(200).json({ message: "The action has been deleted." })
        }
      })
      .catch(err => res.status(500).json({ error: "The action could not be removed." }))
});
server.put('/actions/:id', (req, res) => {
    const { project_id, description, notes, completed } = req.body;
    if (!project_id || !description) {
      res.status(400).json({ errorMessage: "Please provide project_id and description for the action." })
    }
    actionsDb.update(req.params.id, { project_id, description, notes, completed })
      .then(response => {
        if (response === null) {
          res.status(404).json({ message: "The action with the specified ID does not exist." })
        } else {
          res.status(200).json({ response });
        }
      })
      .catch(err => res.status(500).json({ error: "The action could not be updated" }))
});

server.listen(8000, () => console.log('API is running on 8000'));