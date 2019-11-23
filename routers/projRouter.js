const express = require('express');

const projects = require('../helpers/projModel.js');

const router = express.Router();

// GET endpoints
router.get('/', (req, res) => {
  projects.find()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  projects.findById(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

// POST endpoint
router.post('/', (req, res) => {
  const newProj = req.body;

  projects.add(newProj)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project', err });
  });
});

//Delete endpoint
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    projects.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find project with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete project' });
    });
  });

  module.exports = router;