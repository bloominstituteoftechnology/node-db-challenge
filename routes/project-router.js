const express = require('express');

const { Projects } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const project = await Projects.find();
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Projects could not be retrieved' })
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Projects.findById(id);

    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to get project list' });
  }
});

router.post('/', async (req, res) => {
  const projectData = req.body;

  try {
    const project = await Projects.add(projectData);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new project' });
  }
});

module.exports = router;