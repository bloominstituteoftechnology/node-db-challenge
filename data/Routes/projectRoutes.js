const express = require('express')
const knex = require('knex')
const knexConfig = require('../../knexfile')
const DB = knex(knexConfig.development)
const router = express.Router()

router.get('/', (req, res) => {
    DB('projects')
    .then(projects => {
        res.json(projects)
    })
    .catch(() => {
        res.status(500).json({error: 'Projects cannot be retrieved from the DB.'})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    DB('projects')
      .where('projects.id', id)
      .then(project => {
        const thisProject = project[0]
        DB('actions')
          .select(
            'actions.id',
            'actions.description',
            'actions.notes',
            'actions.is_complete',
            'actions.project_id'
          )
          .where('actions.project_id', id)
          .then(actions => {
            if (!thisProject) {
              res.status(404).json({ err: 'invalid project id' })
            } else {
              res.json({
                id: thisProject.id,
                name: thisProject.name,
                description: thisProject.description,
                is_complete: thisProject.is_complete,
                actions: actions
              })
            }
          })
      })
      .catch(() => {
        res
          .status(404)
          .json({ error: 'Info about this project could not be retrieved.' })
      })
  })

module.exports = router
