const express = require('express');
const db = require('./projectController.js');
const projectRouter = express.Router();

projectRouter.get('/', (req, res) => {
  db
    .getProjects()
    .then(projects => {
      if (projects.length > 0) res.status(200).json(projects);
      else res.status(200).json({ message: 'There are no projects in the database.' });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error retrieving the projects.' });
    });
});

projectRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  db
    .getProjectById(id)
    .then(projects => {
      if (projects.length > 0) res.status(200).json(projects);
      else res.status(200).json({ message: `There is no project with ID ${id}.` });
    })
    .catch(error => {
      res.status(500).json({ error: `Error retrieving the project with ID ${id}` });
    });
});

projectRouter.get('/:id/actions', (req, res) => {
  const { id } = req.params;

  db
    .getProjectAndActionsById(id)
    .then(results => {
      if (results.length > 0) res.status(200).json(results);
      else res.status(200).json({ message: `There are no actions on the project with ID ${id}.` });
    })
    .catch(error => {
      res.status(500).json({ error: `Error retrieving actions for the project with ID ${id}` });
    });
});

projectRouter.post('/', (req, res) => {
  const project = req.body;

  if (project.name.length > 0) {
    db
      .postProject(project)
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(error => {
        res.status(500).json({ error: 'Error saving the project.' });
      });
  } else {
    res.status(500).json({ error: 'You must provide a project name.' });
  };
});

projectRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const project = req.body;

  if (project.name.length > 0) {
    db
      .putProjectById(id, project)
      .then(count => {
        if (count > 0) {
          res.status(201).json({ message: `Project with ID ${id} updated successfully.` });
        } else {
          res.status(200).json({ message: `Project with ID ${id} not found.` });
        };
      })
      .catch(error => {
        res.status(404).json({ error: `Project with ID ${id} does not exist.` });
      });
  } else {
    res.status(500).json({ error: 'You must provide a name, description, and flag.' });
  }
});

projectRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  db
    .deleteProjectById(id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: `Project ${id} deleted successfully.`});
      } else {
        res.status(200).json({ message: `Project with ID ${id} not found.` });
      };
    })
    .catch(error => {
      res.status(404).json({ error: `The project with ID ${id} could not be deleted.` });
    });
});

module.exports = projectRouter;