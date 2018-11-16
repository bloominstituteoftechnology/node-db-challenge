
//dependencies
const express = require('express')
const router = express.Router()
const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

//endpoints
router.post('/', async (req, res) => {
    const { action_description, notes } = req.body
    if (!action_description || !notes) {
        res.status(404).json({ message: 'Provide a description and notes for the action.' })
    }
    try {
        const action = await db('actions').insert(req.body)
        res.status(201).json(action)
    } catch (err) {
        res.status(500).json({ error: 'An error occuried while trying to add the action to the database.' })
    }
})
router.get('/', async (req, res) => {
    try {
        const actions = await db('actions')
        res.status(200).json(actions)
    } catch (err) {
        res.status(500).json(e)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const id = await db('actions').where('id', req.params.id).del()
        id > 0
            ? res.status(200).json(id)
            : res.status(400).json({ errorMessage: 'An action with that ID cannot be found.' })
    } catch (err) {
        res.status(500).json({ error: 'An error occuried while trying to delete that action from the database.' })
    }
})
router.put('/:id', async (req, res) => {
    const { action_description, notes } = req.body
    const { id } = req.params
    if (!action_description && !notes) res.status(404).json({ message: 'Provide an update.' })
    try {
        const actUp = await db('actions').update(req.body).where('id', id)
        actUp !== 0 ? res.status(200).json(actUp) : res.status(400).json({ errorMessage: 'That ID does not exist.' })
    } catch (err) {
        res.status(500).json({ error: 'An error occuried while trying to update the action.' })
    }
})
module.exports = router