const knex = require('knex');
const express = require('express');

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

const router = express.Router();

router.get('/', (req, res) => {
   db('actions')
      .then(actions => {
      res.status(200).json(actions);
      })
      .catch(err => res.status(500).json({ errorMessage: 'The actions information could not be retrieved.' }));
});
  
router.post('/', (req, res) => {
   const project = req.body;

   db.insert(project)
      .into('actions')
      .then(id => {
      res.status(201).json(id);
      })
      .catch(err => res.status(500).json({ errorMessage: 'There was an error while saving the action to the database. Maybe that record already exists.' }));
});

router.put('/:id', (req, res) => {
   const changes = req.body;
   const { id } = req.params;

   db('actions')
      .where('id', '=', id)
      .update(changes)
      .then(count => {
      res.status(200).json({ message: `Update succesful. ${count} record(s) updated.` })
      })
      .catch(err => {
      res.status(500).json({ errorMessage: 'Update failed.'})
   });
});

router.delete('/:id', (req, res) => {
   const { id } = req.params;

   db('actions')
      .where({ id })
      .del()
      .then(count => {
      res.status(200).json({ message: `${count} record(s) deleted.`})
      })
      .catch(err => {
      res.status(500).json({ errorMessage: 'Oops! There was an error when trying to delete the record.' })
   });
});

module.exports = router;