const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

// Gets
// Get projects
router.get('/', (req, res) => {
  Projects.find()
  .then(project => {
    res.json(project);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

// Get resources
router.get('/:id/resources', (req, res) => {
  const { id } = req.params;

  Schemes.findResources(id)
  .then(resource => {
    if (steps.length) {
      res.json(resource);
    } else {
      res.status(404).json({ message: 'Could not find resource for given project' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

// Posts
// Projects
router.post('/', (req, res) => {
  const projectsData = req.body;

  Projects.add(projectsData)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project' });
  });
});

// Resources
router.post('/:id/resources', (req, res) => {
  const resourcesData = req.body;
  const { id } = req.params;

  Projects.findById(id)
  .then(project => {
    if (project) {
      Projects.addResource(resourcesData, id)
      .then(resource => {
        res.status(201).json(resource);
      })
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource', err });
  });
});

// Delete
// Delete project
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Projects.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find projects with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete scheme' });
  });
});

module.exports = router;