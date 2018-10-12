const express = require('express');

const projects = require('./projectsModel');

const router = express.Router();

// Find project and actions related to project by id.
router.get('/:id', (req, res) => {
  const { id } = req.params;
  projects
    .findById(id)
    .then((project) => {
      if (!project) {
        return res
          .status(404)
          .json({ message: `Project with id #${id} could not be found.` });
      }
      projects.findProjectActions(id).then((actions) => {
        project.actions = actions;
        res.status(200).json(project);
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Post new project.
router.post('/', (req, res) => {
  const { name, description } = req.body;
  const project = { name, description };
  if (!name) {
    return res.status(400).json({
      message: 'Please provide a name for the project.',
    });
  }
  projects
    .add(project)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
