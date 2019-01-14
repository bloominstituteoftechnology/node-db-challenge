const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

router
  .post('/', (req, res) => {
    const project = req.body;
    !project
      ? res
          .status(401)
          .json({ error: 'Check the sumbitted information and try again' })
      : db('projects')
          .insert(project)
          .then(ids => res.status(201).json(ids[0]))
          .catch(err => res.status(500).json({ err }));
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    db('projects')
      .where('id', id)
      .first()
      .then(result =>
        !result
          ? res
              .status(404)
              .json({ error: 'There is no project with the specified ID' })
          : db('actions')
              .where('project_id', id)
              .then(actions => {
                result.actions = actions;
                res.status(200).json(result);
              })
      )
      .catch(err => res.status(500).json({ err }));
  })
  .get('/', (req, res) => {
    db('projects')
      .then(projects =>
        !projects.length
          ? res.status(404).json({
              error: 'There is no projects just yet, please try again later'
            })
          : res.status(200).json(projects)
      )
      .catch(err => res.status(500).json({ err }));
  })
  .put('/:id', (req, res) => {
    const { id } = req.params;
    const project = req.body;
    db('projects')
      .where('id', id)
      .update(project)
      .then(count =>
        !count
          ? res
              .status(404)
              .json({ error: 'There is no project with the specified ID.' })
          : res.json(count)
      )
      .catch(err => res.status(500).json({ err }));
  })
  .delete('/:id', (req, res) => {
    const { id } = req.params;
    db('projects')
      .where('id', id)
      .del()
      .then(count =>
        !count
          ? res
              .status(404)
              .json({ error: 'There is no project with the specified ID.' })
          : res.status(201).json(count)
      )
      .catch(err => res.status(500).json({ err }));
  });

module.exports = router;
