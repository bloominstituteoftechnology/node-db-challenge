
//dependencies
const express = require('express')
const router = express.Router()
const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

//endpoints
router.post('/', async (req, res) => {
    const { name, description, projectId } = req.body
    if (!name || !description || !projectId) {
        res.status(404).json({ message: 'Adding an action requires a name and description for the action and projectId' })
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
        const count = await db('actions').where({ 'id': req.params.id }).del()
        count > 0
            ? res.status(200).json(count)
            : res.status(404).json({ errorMessage: 'An action with that ID cannot be found.' })
    } catch (err) {
        res.status(500).json({ error: 'An error occuried while trying to delete that action from the database.' })
    }
})
router.put('/:id', async (req, res) => {
    const { name, description, projectId } = req.body
    const { id } = req.params
    if (!name && !description) res.status(400).json({ message: 'Updating an action requires a name and description.' })
    try {
        const count = await db('actions').update(req.body).where('id', id)
        count !== 0 ? res.status(200).json(count) : res.status(400).json({ errorMessage: 'That ID does not exist.' })
    } catch (err) {
        res.status(500).json({ error: 'An error occuried while trying to update the action.' })
    }
})
module.exports = router