const express = require('express')
const knex = require('knex')
const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)
const router = express.Router()

// GET tested in postman
router.get('/', (req, res) => {
  db('actions')
    .then(actions => {
      res.json(actions)
    })
    .catch(() => {
      res.status(500).json({ error: 'Actions cannot be retrieved.' })
    })
})

router.post('/', (req, res) => {
  const action = req.body
  db('projects')
    .where({ id: action.project_id })
    .first()
    .then(project => {
      if (!project) {
        res.status(404).json({ err: 'invalid project id' })
      } else {
        db('actions')
          .insert(action)
          .then(ids => {
            if (
              action.todo_description &&
              action.notes &&
              action.is_completed &&
              action.project_id
            ) {
              res.status(201).json(ids)
            } else {
              res.status(404).json({ message: 'Provide all fields' })
            }
          })
      }
    })
    .catch(err => {
      res.status(500).json({ err: 'Failed to insert action' })
    })
})

module.exports = router
