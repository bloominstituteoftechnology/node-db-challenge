const express = require('express');
const Projects = require('./helper-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Project.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });

  router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
  
    Projects.findTasks(id)
    .then(tasks => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res.status(404).json({ message: 'Could not find tasks for given project' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

  router.post('/', (req, res) => {
    const projectData = req.body;
  console.log('projectData', projectData);
    Projects.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ err, message: 'Failed to create new project' });
    });
  });

  router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const { id } = req.params; 
  
    Projects.findById(id)
    .then(project => {
      if (project) {
        Projects.addStep(taskData, id)
        .then(task => {
          res.status(201).json(task);
        })
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Projects.findById(id)
    .then(project => {
      if (project) {
        Projects.update(changes, id)
        .then(updatedProject => {
          res.json(updatedProject);
        });
      } else {
        res.status(404).json({ message: 'Could not find project with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update project' });
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find project with given id' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
  });
  
  module.exports = router;