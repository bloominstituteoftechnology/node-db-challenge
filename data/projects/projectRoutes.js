const express = require('express')
const knex = require('knex')
const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)
const router = express.Router()

router.get('/:id', (req, res) => {
    const { id } = req.params
    db('projects')
      .where('projects.id', id)
      .then(project => {
        const thisProject = project[0]
        db('actions')
          .select(
            'actions.id',
            'actions.todo_description',
            'actions.notes',
            'actions.is_completed',
            'actions.project_id'
          )
          .where('actions.project_id', id)
          .then(actions => {
            res.json({
              id: thisProject.id,
              name: thisProject.name,
              description: thisProject.description,
              is_complete: thisProject.is_complete,
              actions: actions
            })
          })
      })
      .catch(() => {
        res
          .status(404)
          .json({ error: 'Info about this project could not be retrieved.' })
      })
  })
  
  router.post('/', (req, res) => {
    const project = req.body
    if (project.name && project.description) {
      db('projects')
        .insert(project)
        .then(ids => {
          res.status(201).json({ ids: ids[0] })
        })
        .catch(() => {
          res
            .status(500)
            .json({ error: 'Failed to insert project into database' })
        })
    } else {
      res.status(400).json({
        error: 'Please provide all fields.'
      })
    }
  })


module.exports = router