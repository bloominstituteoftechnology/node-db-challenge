const express = require('express');
const router = express.Router();
const projects = require('../data/helpers/projectLibrary');

const projectCheck = (req, res, next) => {
  if (!req.body.name || !req.body.description || !req.body.complete) {
    return res.status(400).json({ message: "All fields must be completed." });
  }
  next();
};

router.get('/', async (req, res) => {
  try {
    const allProjects = await projects.get();
    return res.status(200).json(allProjects);
  } catch (error) {
    return res.status(500).json({ message: "Projects could not be retrieved.", error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await projects.get(req.params.id);
    if (project === null) {
      return res.status(404).json({ message: "Project does not exist." });
    }
    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({ message: "Project could not be retrieved." });
  }
});

router.post('/', projectCheck, async (req, res) => {
  try {
    const newProject = await projects.insert(req.body);
    return res.status(201).json(newProject);
  } catch (error) {
    return res.status(500).json({ message: "Project could not be added." });
  }
});

router.put('/:id', projectCheck, async (req, res) => {
  try {
    const editedProject = await projects.update(req.params.id, req.body);
    if (editedProject === 0) {
      return res.status(404).json({ message: "Project does not exist." });
    } else {
      return res.status(200).json(editedProject);
    }
  } catch (error) {
    return res.status(500).json({ message: "Project could not be edited." });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedProject = await projects.delete(req.params.id);
    if (deletedProject === 0) {
      return res.status(404).json({ message: "Project does not exist." });
    } else {
      return res.status(200).json(deletedProject);
    }
  } catch (error) {
    return res.status(500).json({ message: "Project could not be deleted." });
  }
});

module.exports = router;
