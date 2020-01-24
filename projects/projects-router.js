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

router.get('/:id', async (req, res, next) => {
    try {
        const project = await Projects.getById(req.params.id)
        res.json({project})
    } catch (error) {
        next(error)
    }
})

module.exports = router