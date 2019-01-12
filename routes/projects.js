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
  db('projects').then(project => {
    res.json(project);
  }).catch(err => {
    res.status(500)
      .json({err: 'failed to find projects'});
  });
});

// GET /api/projects/:id/actions
router.get('/:id/actions', (req, res) => {
  const { id } = req.params;
  db('projects').where('id', id).then(project => {
    console.log(project);
    db('actions').where('project_id', id).then(actions => {
      res.json({
        id: project[0].id,
        name: project[0].name,
        description: project[0].description,
        complete: project[0].complete,
        actions: [actions]
       });
    });
  }).catch(err => {
    res.status(500)
      .json({err: 'failed to find project'});
  });
});

module.exports = router;
