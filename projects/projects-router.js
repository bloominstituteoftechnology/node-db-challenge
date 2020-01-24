const express = require('express')
const db = require('../data/db-config')
const Projects = require ('./projects-model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const allProjects = await Projects.getAll()
        res.json(allProjects)
    } catch (error) {
        next(error)
    }
})

module.exports = router