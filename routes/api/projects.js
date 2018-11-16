const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);
const router = express.Router();

// GET ALL PROJECTS
router.get('/', async (req, res) => {
  try {
    const projects = await db('projects');
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'There was an error gertting the projects.' });
  }
});

// GET project by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const project = await db('projects').where({ id });
    const actions = await db
      .select('actions.*')
      .from('projects')
      .join('actions', 'projects.id', 'actions.project_id')
      .where({ 'projects.id': id });
    return !project.length
      ? res.status(404).json({ message: "That project doesn't exist." })
      : res.status(200).json({ ...project[0], actions });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'There was a problem getting that project.' });
  }
});

// Adding a new PROJECT
router.post('/', async (req, res) => {
  const projectData = req.body;
  try {
    const id = await db.insert(projectData).into('projects');
    res.status(201).json(id);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'There was an error creating that project.' });
  }
});

module.exports = router;
