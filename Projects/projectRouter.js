const express = require('express')

const Projects = require('./projects-model.js')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find()
        projects.map(project => {
            project.completed = project.completed === 1 ? true : false
        })
        res.status(200).json(projects)
    } catch (err) {
        res.status(500).json({
            message: "There was an error retrieving the projects."
        })
    }
})

router.get('/:id/actions', async (req, res) => {

    const { id } = req.params

    try {
        const project = await Projects.findById(id)
        if (project.name) {
            if (project.actions.length > 0) {
                console.log(project.completed)
                project.completed = project.completed === 1 ? true : false
                project.actions.map(action => {
                    action.completed = action.completed === 1 ? true : false
                })
                res.status(200).json(project)
            } else {
                res.status(404).json({
                    messsage: "This project has no associated actions."
                })
            }
        } else {
            res.status(404).json({
                message: "The project with this ID could not be found."
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "There was an error retrieving the project."
        })
    }
})

router.post('/', validateNewProjectBody, validateUniqueName, async (req, res) => {
    const newProject = req.body
    try {
        const project = await Projects.postProject(newProject)
        res.status(200).json(project)
    } catch (err) {
        res.status(500).json({
            message: "There was an error creating the project."
        })
    }
})

router.post('/:id/actions', validateNewActionBody, async (req, res) => {
    const newAction = {
        description: req.body.description,
        notes: req.body.notes,
        completed: req.body.completed,
        project_id: req.params.id
    }

    try {
        const action = await Projects.postAction(newAction)
        res.status(200).json(action)
    } catch (err) {
        res.status(500).json({
            message: "There was an error creating the action."
        })
    }
})