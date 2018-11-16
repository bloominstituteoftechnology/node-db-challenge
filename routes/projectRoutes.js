// Imports
const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);
const errorHandler = require('../utils/errorHandler.js');
const router = express.Router();

// Routes
// GET
router.get('/', (req, res) => {
  db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      errorHandler(res, 500, 'There was an error getting the projects.', error);
    });
});

// GET :ID
router.get('/:id', (req, res) => {
  const id = req.params.id;

  db('projects')
    .where({ id })
    .first()
    .then(project => {
      if (project) {
        db('actions')
          .where({ project_id: id })
          .then(actions => {
            project.actions = actions;
            res.status(200).json(project);
          });
      } else {
        res.status(400).json({
          message: 'Could not find the project you are looking for.',
          error
        });
      }
    })
    .catch(error => {
      errorHandler(res, 500, 'There was an error getting the project.', error);
    });
});

// POST
router.post('/', (req, res) => {
  const newProject = req.body;

  db('projects')
    .insert(newProject)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      errorHandler(res, 500, 'There was an error adding the project.', error);
    });
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db('projects')
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(error => {
      errorHandler(res, 500, 'There was an error deleting the project', error);
    });
});

// PUT
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const update = req.body;

  db('projects')
    .where({ id })
    .update(update)
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(error => {
      errorHandler(res, 500, 'There was an error updating the project.', error);
    });
});

module.exports = router;
