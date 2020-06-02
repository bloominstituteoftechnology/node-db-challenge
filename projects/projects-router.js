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
    res.status(500).json({ message: 'Failed to get projects', err });
  });
});

// Get project by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
  .then(project => {

    if (project) {
      res.json(project);
    } else {
      res.status(404).json({message: ''})
    }
  })
  .catch(err => {
    res.status(500).json({mesasge: '', err})
  })
})

// Get resources
router.get('/:id/resources', (req, res) => {
  const { id } = req.params;

  Projects.findResources(id)
  .then(resource => {
    res.json(resource);
  })
  .catch(err => {
    res.status(500).json({message: 'failed to retreive resources', err})
  })
});

// Get tasks
router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Projects.findtasks(id)
  .then(task => {
    res.json(task);
  })
  .catch(err => {
    res.status(500).json({message: 'failed to retreive tasks', err})
  })
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
router.post('/resources', (req, res) => {
  const resourcesData = req.body;

  // Projects.findById(id)
  // .then(project => {
      Projects.addResources(resourcesData)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch (err => {
        res.status(500).json({ message: 'Failed to create new resource', err });
    }
  )
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