const express = require('express')

const Projects = require('./projects-model')

const router = express.Router()


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

module.exports = router