const express = require('express');

const Projects = require('./helper-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (err) {
    res
      .status(500)
      .json({ err: err.message, message: 'Failed to get projects' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);

    if (project) {
      res.json(project);
    } else {
      res
        .status(404)
        .json({ message: 'Could not find project with given id.' });
    }
  } catch (err) {
    res
      .status(500)
      .json({ err: err.message, message: 'Failed to get project' });
  }
});

router.get('/:id/actions', async (req, res) => {
  const { id } = req.params;

  try {
    const actions = await Projects.findActions(id);

    if (actions.length) {
      res.json(actions);
    } else {
      res
        .status(404)
        .json({ message: 'Could not find actions for given scheme' });
    }
  } catch (err) {
    res
      .status(500)
      .json({ err: err.message, message: 'Failed to get actions' });
  }
});

router.post('/', async (req, res) => {
  const projectData = req.body;

  try {
    const project = await Projects.add(projectData);
    res.status(201).json(project);
  } catch (err) {
    res
      .status(500)
      .json({ err: err.message, message: 'Failed to create new project' });
  }
});

router.post('/:id/actions', async (req, res) => {
  const actionData = req.body;
  const { id } = req.params;

  try {
    const project = await Projects.findById(id);

    if (project) {
      const action = await Projects.addAction(actionData, id);
      res.status(201).json(action);
    } else {
      res
        .status(404)
        .json({ message: 'Could not find project with given id.' });
    }
  } catch (err) {
    res
      .status(500)
      .json({ err: err.message, message: 'Failed to create new action' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const project = await Projects.findById(id);

    if (project) {
      const updatedProject = await Projects.update(changes, id);
      res.json(updatedProject);
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  } catch (err) {
    res
      .status(500)
      .json({ err: err.message, message: 'Failed to update project' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Projects.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete project' });
  }
});

module.exports = router;
