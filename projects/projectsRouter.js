const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

router.get('/', (req, res) => {
  db('projects')
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  const project = req.body;

  db('projects')
    .insert(project)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error inserting',
        err
      });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  return db('projects')
    .where({ id })
    .first()
    .then(project => {
      if (project) {
        db('actions')
          .where({ project_id: id })
          .then(actions => {
            project.actions = actions;
            res.status(200).json(project);
          })
      } else {
        res.status(404).json({ message: 'project not found' });
      }
    });
});


// router.put('/:id', (req, res) => {
//   const changes = req.body;
//   const { id } = req.params;

//   db('projects')
//     .where({ id: id })
//     .update(changes)
//     .then(count => {
//       res.status(200).json({ count });
//     })
//     .catch(err => res.status(500).json(err));
// });


// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   db('projects')
//     .where({ id: id })
//     .del()
//     .then(count => {
//       res.status(200).json({ count });
//     })
//     .catch(err => res.status(500).json(err));
// });


module.exports = router