const express = require("express")
const db = require("../db-config")
const Projects = require("./projects-model")
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const allProjects = await Projects.findAll()
        res.json(allProjects)
    }
    catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const id = await Projects.add(req.body)
        res.status(201).json(await Projects.findById(id))
    }
    catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const project = await Projects.findById(req.params.id)
        res.json({project})
    }
    catch(err) {
        next(err)
    }
})


module.exports = router