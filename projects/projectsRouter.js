const express = require('express');
const projectRouter = express.Router();
const db = require('./projectsController');


projectRouter.get('/', (req, res) => {
  db.getAll()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

projectRouter.post('/', (req, res) => {
  const { name, description, completed } = req.body;

  if (!name || !description || completed === null) {
    res.status(404).json({message: 'Must provide name, description and completed field for project'});
  } else {
    db.add(req.body)
      .then(response => {
        res.status(201).json({message: 'Successfully added new project.'});
      })
      .catch(error => {
        res.status(500).json(error);
      })
  }
});

projectRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.remove(id)
    .then(response => {
      res.status(202).json({message: 'Successfully deleted project'});
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

projectRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const projectInfo = req.body;

  db.update(id, projectInfo)
    .then(response => {
      res.status(201).json({message: 'Successfully updated project.'});
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

module.exports = projectRouter;