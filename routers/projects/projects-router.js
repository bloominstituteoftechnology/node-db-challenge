const express = require('express')

const Projects = require('./projects-model')

const router = express.Router()

const knex = require('knex')
const config = require('../../knexfile')
const db = knex(config.development)


router.post('/', async (req, res) => {
    try {
        const projects = await Projects.addProject(req.body)
        res.status(200).json(projects)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't add that project."
        })
    }
})

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.getProjects()
        const actions = await db('actions')
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({
            message: "Couldn't retrieve the posts."
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const projects = await Projects.getProject(req.params.id)
        res.status(200).json(projects)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't find that post."
        })
    }
})

router.get('/:id/actions', async (req, res) => {
    try {
        const actions = await db('actions')
            .where({ project_id: req.params.id })
            .first()
        res.status(200).json({actions})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't find those actions."
        })
    }
})


module.exports = router