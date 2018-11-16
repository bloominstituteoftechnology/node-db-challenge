const express = require('express')
const router = express.Router()
const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

router.post('/', async (req, res) => {
    const { action_description, notes } = req.body
    if (!action_description || !notes) {
        res.status(404).json({ message: 'Please provide a description and notes for the action.' })
    }
    try {
        const action = await db('actions').insert(req.body)
        res.status(201).json(action)
    } catch (e) {
        res.status(500).json({ error: 'An error occuried while trying to add the action to the database.' })
    }
})

module.exports = router
