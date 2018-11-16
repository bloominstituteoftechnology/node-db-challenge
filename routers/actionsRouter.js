const express = require('express');

const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

const router = express.Router();

router.post('/', (req, res) => {
    const action = req.body;
  
    db('actions')
      .insert(action)
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(err => {
        res.status(500).json({ message: 'Error creating action', err });
      });
  });

  router.get('/', (req, res) => {
    db('actions')
      .then(actions => res.status(200).json(actions))
      .catch(err => res.status(500).json({ message: 'could not get actions', err }));
  });
  
  router.get('/:id', (req, res) => {
    db('actions')
      .where({ id: req.params.id })
      .then(actions => res.status(200).json(actions))
      .catch(err => res.status(500).json({ message: 'could not get action', err }));
  });
  
  router.put('/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    
    db('actions')
      .where({ id })
      .update(changes)
      .then(count => {
        res.status(200).json({ count });
      })
      .catch(err => res.status(500).json({ message: 'could not update action', err }));
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    
    db('actions')
      .where({ id })
      .del()
      .then(count => {
        res.status(200).json({ count });
      })
      .catch(err => res.status(500).json({ message: 'could not delete action', err }));
  });

  module.exports = router;