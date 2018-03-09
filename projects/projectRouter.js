const express = require('express');
const db      = require('./projectController.js');

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
    .then(project => {
      if (project.length > 0) res.status(200).json(project);
      else res.status(200).json({ message: `There is no project with ID ${id}.` });
    })
    .catch(error => {
      res.status(500).json({ error: `Error retrieving project with ID ${id}.` });
    });
});

projectRouter.post('/', (req, res) => {
  const project = req.body;

  if (project.length > 0) {
    db
      .postProject(project)
      .then(allP => {
        res.status(201).json(allP);
      })
      .catch(error => {
        res.status(500).json({ error: 'Error saving the project.' });
      });
  } else {
    res.status(500).json({ error });
  }
});


projectRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  db
    .deleteProjectById(id)
    .then(count => {
      console.log('count: ', count);
      if (count > 0) {
        res.status(200).json({ message: `Project ${id} deleted successfully.`});
      } else {
        console.log('oye');
        res.status(200).json({ message: `Project with ID ${id} not found.` });
      };
    })
    .catch(error => {
      console.log('vey');
      res.status(404).json({ error: `The project with ID ${id} could not be deleted.` });
    });
});

module.exports = projectRouter;
