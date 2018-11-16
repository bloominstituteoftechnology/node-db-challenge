const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);
const router = express.Router();

// GET All Actions
router.get('/', async (req, res) => {
  try {
    const actions = await db('actions');
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ error: 'There was an error gertting the actions.' });
  }
});

// GET Action by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const action = await db('actions').where({ id });
    return !action.length
      ? res.status(404).json({ message: 'That action does not exist.' })
      : res.status(200).json(action[0]);
  } catch (error) {
    res.status(500).json({ error: 'There was an error getting that action.' });
  }
});

// Adding a new PROJECT
router.post('/', async (req, res) => {
  const actionData = req.body;
  try {
    const id = await db.insert(actionData).into('actions');
    res.status(201).json(id);
  } catch (error) {
    res.status(500).json({ error: 'There was an error creating that action.' });
  }
});

module.exports = router;
