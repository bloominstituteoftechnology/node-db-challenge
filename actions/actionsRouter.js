const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

router.get('/', (req, res) => {
  db('actions')
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  const action = req.body;

  db('actions')
    .insert(action)
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

// router.get('/:id', (req, res) => {
//   const {
//     id
//   } = req.params;

//   db('actions')
//     .where({ id: id })
//     .then(action => {
//       res.status(201).json({ action });
//     })
//     .catch(err => res.status(500).json(err));
// });


// router.put('/:id', (req, res) => {
//   const changes = req.body;
//   const { id } = req.params;

//   db('actions')
//     .where({ id: id })
//     .update(changes)
//     .then(count => {
//       res.status(200).json({ count });
//     })
//     .catch(err => res.status(500).json(err));
// });


// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   db('actions')
//     .where({ id: id })
//     .del()
//     .then(count => {
//       res.status(200).json({ count });
//     })
//     .catch(err => res.status(500).json(err));
// });


module.exports = router