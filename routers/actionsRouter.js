const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

router
  .post('/', (req, res) => {
    const action = req.body;
    !action
      ? res
          .status(401)
          .json({ error: 'Check the submitted information and try again.' })
      : db('actions')
          .insert(action)
          .then(ids => res.status(201).json(ids[0]))
          .catch(err => res.status(500).json(err));
  })
  .get('/', (req, res) => {
    db('actions')
      .then(actions =>
        !actions.length
          ? res.status(404).json({
              error: 'There is no actions just yet, please try again later.'
            })
          : res.json(actions)
      )
      .catch(err => res.status(500).json(err));
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    db('actions')
      .where('id', id)
      .first()
      .then(action =>
        db('projects')
          .where('id', action.project_id)
          .first()
          .then(project => (action.project = project))
          .then(project => res.json(action))
      )
      .catch(err => res.status(500).json(err));
  })
  .put('/:id', (req, res) => {
    const { id } = req.params;
    const action = req.body;
    db('actions')
      .where('id', id)
      .update(action)
      .then(count =>
        !count
          ? res
              .status(404)
              .json({ error: 'There is no action with the specified ID.' })
          : res.json(count)
      )
      .catch(err => res.status(500).json(err));
  })
  .delete('/:id', (req, res) => {
    const { id } = req.params;
    db('actions')
      .where('id', id)
      .del()
      .then(count =>
        !count
          ? res
              .status(404)
              .json({ error: 'There is no action with the specified ID.' })
          : res.status(201).json(count)
      )
      .catch(err => res.status(500).json(err));
  });

module.exports = router;
