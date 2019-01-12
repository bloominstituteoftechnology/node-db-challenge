const express = require('express');
const db = require('../data/dbConfig');

const router = express.Router();

// POST /api/projects
router.post('/', (req, res) => {
  const project = req.body;
  db('projects').insert(project)
    .then(idInfo => {
      db('projects').get(idInfo.id)
        .then(project => {
          res.status(201).json(idInfo);
        });
    }).catch(err => {
      res.status(500)
        .json({err: 'failed to insert project into db'});
    });
});

// GET /api/projects
router.get('/', (req, res) => {
  db('projects').then(rows => {
    res.json(rows);
  }).catch(err => {
    res.status(500)
      .json({err: 'failed to find projects'});
  });
});

// GET /api/projects/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('projects').where('id', id).then(rows => {
    res.json(rows);
  }).catch(err => {
    res.status(500)
      .json({err: 'failed to find project'});
  });
});

// GET /api/projects/:id/actions
router.get('/:id/actions', (req, res) => {
  const { id } = req.params;

});

// PUT /api/projects/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;

});

// DELETE /api/projects/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

});

module.exports = router;
