const express = require('express');
const router = express.Router();
const db = require('../helpers/db-helper');

// endpoints
router.get('/api/projects/test', (req, res) => {
  res.status(200).send('Server Listens and Obeys');
});

router.get('/api/projects/', async (req, res) => {
  console.log('Why is this not working?');
  try {
    const projects = await db.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'There was an error while getting the projects. The error is ', error });
  }
});

router.post('/api/projects/', async (req, res) => {
  const projectData = req.body;
  console.log(req.body);
  if (!projectData.name || !projectData.description) {
    res.status(400).json({ errorMessage: 'Please provide a name and a description for your project.' });
  } else {
    try {
      const newProject = await db.addProject(projectData);
      res.status(201).json(newProject);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'There was an error while saving the project to the database. The error is ', error });
    }
  }
});

router.get('/api/projects/:projectId', async (req, res) => {
  const { projectId } = req.params;

  db.getProjectActions(projectId)
    .then(action => {
      db.getProject(projectId)
        .then(project => {
          res.status(200).json({ project[0], actions: action });
        })
        .catch(_ => {
          res.status(404).json({ message: '404 project not found' });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: '500 error fetching', err });
    });
});

module.exports = router;
