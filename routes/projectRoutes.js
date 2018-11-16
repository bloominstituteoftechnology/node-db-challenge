// NODE MODULES, EXPRESS ROUTER
// ==============================================
const express = require('express');
const projectDb = require('../data/helpers/projectDb.js');

const router = express.Router();

// ROUTES
// ==============================================
router.get('/', async (_, res) => {
  try {
    const projects = await projectDb.get();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: 'The projects could not be retrieved from the database.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await projectDb.get(req.params.id);
    project
      ? res.status(200).json(project)
      : res.status(404).json({ error: 'The project with the specified ID does not exist.' });
  } catch {
    res.status(500).json({ error: "There was an error retrieving the project's information!" });
  }
});

router.post('/', async (req, res) => {
  if (req.body.name && req.body.description) {
    try {
      const addedProject = await projectDb.insert(req.body);
      const project = await projectDb.get(addedProject.id);
      res.status(201).json(project);
    } catch (err) {
      res
        .status(500)
        .json({ error: 'There was an error while saving the project to the database.' });
    }
  } else {
    res
      .status(400)
      .json({ errorMessage: 'Please provide a name and description for the project.' });
  }
});

module.exports = router;
