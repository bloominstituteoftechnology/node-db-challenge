const express = require('express');
const router = express.Router();
const db = require('../helpers/db-helper');

// endpoints
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

module.exports = router;
