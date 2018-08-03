const express = require('express');
const db = require('../data/dbConfig.js');
const router = express.Router();

router.get('/', (req, res) => {
  db('projects')
    .then( projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('projects')
    .where({ id })
    .then(project => {
      if (project.length === 0) {
        res.status(200).send({ error: 'A project with this id does not exist.'});
      }
      res.status(200).json(project);
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  const project = req.body;

  db.insert(project).into('projects')
    .then(ids => {
      const id = ids[0]
      res.status(201).json({id, ...project});
    })
    .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  const { name, description, iscomplete } = req.body;
  const { id } = req.params;

  db('projects')
    .where({ id })
    .update({ name, description, iscomplete })
    .then(count => {
      if (count) {
        db('projects')
          .where({ id })
          .then(project => {
            res.status(200).json(project);
          })
          .catch(err => res.status(500).json(err));
      } else {
        res.status(200).send({ error: 'A project with this id does not exist.'});
      }
    })
    .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  let deletedproject;

  db('projects')
    .where({ id })
    .then(project => {
      if (project.length === 0) {
        res.status(200).send({ error: 'A project with this id does not exist.'});
      }
      deletedproject = project;
    })
    .catch(err => res.status(500).json(err));

  db('projects')
    .where({ id })
    .del()
    .then(count => {
      if (count) {
        res.status(200).json(deletedproject);
      } else {
        res.status(200).send({ error: 'A project with this id does not exist.'});
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;