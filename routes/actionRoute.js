const express = require('express')
const router = express.Router()
const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

router.post('/', async (req, res) => {
  const { name, description, projectId } = req.body
  if (!name || !description || !projectId) {
      res.status(404).json({ message: 'Adding an action requires a name and description for the action and the projectId.' })
  }
  try {
      const action = await db('actions').insert(req.body)
      res.status(201).json(action)
  } catch (err) {
      res.status(500).json({ error: 'The actions information could not be retrieved.' })
  }
})
router.get('/', async (req, res) => {
  try {
      const actions = await db('actions')
      res.status(200).json(actions)
  } catch (err) {
      res.status(500).json(err)
  }
})
router.delete('/:id', async (req, res) => {
  try {
      const count = await db('actions').where({ 'id': req.params.id }).del()
      count > 0
          ? res.status(200).json(count)
          : res.status(404).json({ message: 'An action with that ID could not be found.' })
  } catch (err) {
      res.status(500).json({ error: 'The action could not be deleted.' })
  }
})
router.put('/:id', async (req, res) => {
    const { name, description, projectId } = req.body
    const { id } = req.params
    if (!name && !description) res.status(400).json({ message: 'Updating an action requires a name and description.' })
    try {
        const count = await db('actions').update(req.body).where({'id': id})
        count !== 0 ? res.status(200).json(count) : res.status(404).json({ message: 'An action with that ID could not be found' })
    } catch (err) {
        res.status(500).json({ error: 'The action could not be updated.' })
    }
})

module.exports = router
