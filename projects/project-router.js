const express = require('express');

const Projects = require('./project-model.js');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      let convertedProject = projects.map(project => {
        if (project.completed) {
          return { ...project, completed: true };
        } else {
          return { ...project, completed: false };
        }
      });
      res.status(200).json(convertedProject);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error occurred while getting all projects.',
        err: err,
      });
    });
});

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Projects.getTasks(id)
    .then(tasks => {
      let convertedTasks = tasks.map(task => {
        if (task.completed) {
          return { ...task, completed: true };
        } else {
          return { ...task, completed: false };
        }
      });
      res.status(200).json(convertedTasks);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error occurred while getting tasks.',
        err: err,
      });
    });
});

router.get('/:id/resources', (req, res) => {
  const { id } = req.params;

  Projects.getResources(id)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error occurred while getting resources.',
        err: err,
      });
    });
});

router.post('/', (req, res) => {
  const projectData = req.body;

  if (!Object.keys(projectData).includes('name')) {
    return res.status(400).json({ message: 'Invalid data.' });
  }

  Projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error occurred while adding a new project.',
        err: err,
      });
    });
});

router.post('/:id/tasks', (req, res) => {
  const { id } = req.params;
  const taskData = req.body;

  if (!Object.keys(taskData).includes('description')) {
    return res.status(400).json({ message: 'Invalid data.' });
  }

  Projects.addTask(id, taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error occurred while adding a new task.',
        err: err,
      });
    });
});

router.post('/:id/resources', (req, res) => {
  const { id } = req.params;
  const resourceData = req.body;

  if (!Object.keys(resourceData).includes('name')) {
    return res.status(400).json({ message: 'Invalid data.' });
  }

  db('resources')
    .insert(resourceData)
    .then(([resourceId]) => {
      db('project-resources')
        .insert({ project_id: id, resource_id: resourceId })
        .then(success => {
          Projects.getResources(id)
            .then(resources => {
              res.status(200).json(resources);
            })
            .catch(err => {
              res.status(500).json({
                message: 'Error occurred while getting resources.',
                err: err,
              });
            });
        });
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error occurred while adding a new resource.',
        err: err,
      });
    });
});

module.exports = router;