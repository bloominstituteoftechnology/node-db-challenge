const express = require('express');
const router = express.Router();
const db = require('../helpers/db-helper');

// endpoints
router.get('/api/projects/', (req, res) => {
  console.log('Why is this not working?');
  try {
    // const projects = await db.getProjects();
    res.status(201);
    // .json(projects);
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

  try {
    const project = await db.getProject(projectId);
    {
      project[0]
        ? res.status(200).json({ project })
        : res.status(404).json({ error: 'The project with that ID does not exist.' });
    }
  } catch (error) {
    console.log('The error is: ', error);
    res.status(500).json(error);
  }
});

module.exports = router;
