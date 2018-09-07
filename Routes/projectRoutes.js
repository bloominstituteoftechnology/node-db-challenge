const projectModel = require('../data/helpers/projectModel');
const knex = require('knex');
const express = require('express');

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

const router = express.Router();

router.get('/', (req, res) => {
   db('projects')
      .then(projects => {
      res.status(200).json(projects);
      })
      .catch(err => res.status(500).json({ errorMessage: 'The projects information could not be retrieved.' }));
});

router.get('/:id', (req, res) => {
   const { id } =req.params;
   db('projects')
      .where({ id })
      .then(project => {
         if( project.length === 0) {
               res.status(404).json({ error: 'The project with the specified ID does not exist.' })
         }
         else {
               res.status(200).json(project);
         }  
      })
      .catch(err => {
         console.error('error', err)
         res.status(500).json({ error: 'The project information could not be retrieved.' });
      });
});
        
router.post('/', (req, res) => {
   const project = req.body;

   db.insert(project)
      .into('projects')
      .then(id => {
      res.status(201).json(id);
      })
      .catch(err => res.status(500).json({ errorMessage: 'There was an error while saving the project to the database. Maybe that record already exists.' }));
});

router.put('/:id', (req, res) => {
   const changes = req.body;
   const { id } = req.params;

   db('projects')
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

   db('projects')
      .where({ id })
      .del()
      .then(count => {
      res.status(200).json({ message: `${count} record(s) deleted.`})
      })
      .catch(err => {
      res.status(500).json({ errorMessage: 'Oops! There was an error when trying to delete the record.' })
   });
});

router.get('/:id/actions', (req, res) => {
   projectModel.getProjectActions(req.params.id)
   .then(project => {
      if( project.length === 0) {
         res.status(404).json({ error: 'Project do not exist.' })
      }
      else {
         res.status(200).json({project});
      }  
   })
   .catch(err => {
      console.error('error', err);
      res.status(500).json({ error: 'The actions information could not be retrieved.' });
   });
});

module.exports = router;