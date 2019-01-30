const express = require('express')
const knex = require('knex')
const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)
const router = express.Router()

router.get('/api/actions', (req, res) => {
    db('actions')
      .then(actions => {
        res.json(actions)
      })
      .catch(() => {
        res
          .status(500)
          .json({ error: 'The actions information can not be retrieved.' })
      })
  })
  
  router.post('/api/actions', (req, res) => {
    const action = req.body
    db('actions')
      .select(action.project_id)
      .then(projects => {
        if (action.todo_description) {
          actions
            .insert(action)
            .then(ids => {
              res
                .status(201)
                .json({ message: 'Action was succussfully added to database.' })
            })
            .catch(() => {
              res
                .status(500)
                .json({ error: 'Failed to insert action into database' })
            })
        } else {
          res.status(400).json({
            error: 'Please provide all fields.'
          })
        }
      })
      .catch(() => {
        res.json({ message: 'The project_id you specified does not exist in the database.'})
      })
  })

module.exports = router