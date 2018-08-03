const express = require('express');
const router = express.Router();

const db = require('../data/db');

router.get('/', (req, res) => {
  db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  const project = req.body;

  db.insert(project)
    .into('projects')
    .then(ids => {
      const id = ids[0];

      res.status(201).json(ids, ...project);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
