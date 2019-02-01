const express = require('express')
const knex = require('knex')
const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)
const router = express.Router()

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
  if (
    action.todo_description &&
    action.project_id &&
    action.notes &&
    typeof action.is_completed === 'boolean'
  ) {
    db('projects')
      .where({ id: action.project_id })
      .first()
      .then(project => {
        if (!project) {
          res.status(404).json({ err: 'invalid project id' })
        } else {
          db('actions')
            .insert(action)
            .then(id => {
              if (id[0]) {
                db('actions')
                  .where('actions.id', id[0])
                  .then(action => {
                    res.status(201).json(action)
                  })
              }
            })
            .catch(() => {
              res.status(500).json({ err: 'Error creating action' })
            })
        }
      })
      .catch(() => {
        res.status(500).json({ err: 'Failed to insert action' })
      })
  } else {
    res.status(404).json({ message: 'Provide all fields' })
  }
})

module.exports = router
