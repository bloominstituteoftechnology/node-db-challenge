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

module.exports = router
