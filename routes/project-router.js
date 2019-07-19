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
    res.status(500).json({ message: 'Failed to get project' });
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

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Projects.update(id, req.body);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "No project found with that id" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "The project information could not be modified" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Projects.remove(id);
    if (deleted) {
      res.status(204).json(deleted);
    } else {
      res.status(404).json({ message: "No project matching that id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "The project could not be removed" });
  }
});

module.exports = router;