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

router.get('/', async (req, res) => {
  try {
    const projects = await db('projects');
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get('/actions', async (req, res) => {
  try {
    const actions = await db('actions');
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json(error);
  }
});
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

router.post('/:id/actions', (req, res) => {
  db('actions')
    .where('project_id', '=', req.params.id)
    .insert(req.body)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err));
});

router.post('/:id/actions', (req, res) => {
  db('projects')
    .innerJoin('actions', 'project.id', '=', 'actions.project_id')
    .then(actions => {
      res.status(200).json(actions);
    });
});

router.get('/:id/actions', (req, res) => {
  try {
    const id = req.params.id;
    db('projects')
      .get(id)
      .then(action => {
        res.status(201).json(action);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

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
module.exports = router;
