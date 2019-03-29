const express = require('express');
const knex = require('knex');
const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/list.db3'
  },
  useNullAsDefault: true, // needed for sqlite
  migrations: {
    directory: './data/migrations'
  }
};
const db = knex(knexConfig);
const router = express.Router();

// GET ALL PROJECTS

router.get('/', async (req, res) => {
  try {
    const projects = await db('projects');
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL ACTIONS

router.get('/actions', async (req, res) => {
  try {
    const actions = await db('actions');
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET PROJECT BY ID WITH ACTIONS
router.get('/:id', async (req, res) => {
  try {
    const project = await db
      .select('p.name', 'p.description', 'p.complete', 'p.id')
      .from('projects as p')
      .where({ 'p.id': req.params.id })
      .first();

    const action = await db('actions')
      .select('notes', 'id', 'description', 'complete', 'project_id')
      .where({ project_id: req.params.id });
    res.status(200).json({ ...project, action });
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: 'Not working' });
  }
});

// POST NEW PROJECT

router.post('/', async (req, res) => {
  try {
    await db('projects')
      .insert(req.body)
      .then(project => {
        res.status(201).json(project);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST NEW ACTION
router.post('/:id/actions', async (req, res) => {
  try {
    await db('actions')
      .insert(req.body)
      .then(ids => {
        res.status(201).json(ids);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
