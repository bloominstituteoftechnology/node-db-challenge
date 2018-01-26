const express = require('express');
const Router = express.Router();
const projects = require('./controller');

Router.get('/:id', (req, res) => {
  const { id } = req.params;
  projects.getProjects(id)
    .then(project => {
      if (!project) return res.status(422).json({ error: 'Project not found' });
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

module.exports = Router;