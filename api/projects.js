const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)
const router = express.Router();

/* ----  GET ALL PROJECTS  ---- */
router.get('/', (req, res) => {
  db('projects')
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err))
})

/* ----  NEW PROJECT  ---- */
router.post('/', (req, res) => {
  const newProject = req.body
  db('projects')
    .insert(newProject)
    .then(count => res.status(201).json(count))
    .catch(err => res.status(500).json(err))
})
/* ----  PROJECT BY ID WITH ACTIONS  ---- */
router.get('/:id', (req, res) => {
  const { id } = req.params
  const projectsPromise =
    db('projects')

      .select()
      .where('projects.id', id)

  const actionsPromise = db('actions')
    .join('projects', 'actions.project_id', '=', 'projects.id')
    .where('actions.project_id', '=', id)
    .select('projects.id', 'projects.name', 'projects.description', 'projects.completed', 'actions.id as actions_id', 'actions.description', 'actions.notes')
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err))

})

module.exports = router;