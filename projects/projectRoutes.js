const express = require('express');
const db = require('../helpers/projectsDb.js');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await db.getAll();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).send({ error: 'The projects could not be retrieved.' })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await db.get(req.params.id);
    if (project.length === 0) {
      res.status(404).send({ error: 'The project with the specified ID does not exist.'});
    } else {
      res.status(200).json(project);
    }
  } catch (err) {
    res.status(500).send({ error: 'The project information could not be retrieved.' });
  }
});

router.get('/:id/details', async (req, res) => {
  try {
    const project = await db.getProject(req.params.id);
    if (project.length === 0) {
      res.status(404).send({ error: 'The project with the specified ID has no actions.'});
    } else {
      const formattedProject = {};
      const firstProject = project[0];
      formattedProject.name = firstProject.projectName;
      formattedProject.description = firstProject.projectDescription;formattedProject.completed = firstProject.projectIsComplete;
      formattedProject.actions = project.map(item => {
        return {description: item.actionDescription, notes: item.actionNotes, completed: item.actionIsComplete};
      });
      res.status(200).json(formattedProject);
    }
  } catch (err) {
    res.status(500).send({ error: 'The project information could not be retrieved.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const added = await db.insert(req.body);
    const project = await db.get(added.id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).send({ error: 'There was an error while saving the project to the database.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    let project = await db.get(req.params.id);
    if (project.length === 0) {
      res.status(404).send({ error: 'The project with the specified ID does not exist.' })
    } else {
      await db.update(req.params.id, req.body);
      project = await db.get(req.params.id);
      res.status(200).json(project);
    }
  } catch (err) {
    res.status(500).send({ error: 'The project information could not be modified.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const project = await db.get(req.params.id);
    if (project.length === 0) {
      res.status(404).send({ error: 'The project with the specified ID does not exist.' })
    } else {
      await db.remove(req.params.id)
      res.status(200).json(project);
    }
  } catch (err) {
    res.status(500).send({ error: 'The project could not be removed.' });
  }
});

module.exports = router;