const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.findProjects()
  .then(Projects => {
    res.json(Projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Projects' });
  });
});

router.get('/resources', (req, res) => {
    Projects.findResources()
    .then(Projects => {
      res.json(Projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

  router.get('/tasks', (req, res) => {
    Projects.findTasks()
    .then(Projects => {
      res.json(Projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
  .then(ids => {
    res.status(201).json({created: ids[0]});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new Project' });
  });
});

router.post('/tasks', (req, res) => {
  const taskData = req.body;

  Projects.addTask(taskData)
  .then(ids => {
    res.status(201).json({created: ids[0]});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new Task' });
  });
});

router.post('/resources', (req, res) => {
  const resourceData = req.body;

  Projects.addResource(resourceData)
  .then(ids => {
    res.status(201).json({created: ids[0]});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});

module.exports = router;