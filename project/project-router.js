const express = require('express')

const Project = require('./project-model.js')

const router = express.Router()


//Add Resources
router.post('/Resource', async (req, res) => {
    const resource = req.body
    try {
        const newResource = await Project.addResource(resource)
        if (newResource) {
            res.status(201).json('New Resource added')
        } else {
            res.status(404).json('Unable to add new Resource')
        }
    }
    catch{
        res.status(500).json('Error With database')
    }
})

//Get Resources
//--------------
router.get('/Resource', async (req, res) => {
    const found = await Project.getResources()
    try {
        if (found) {
            res.status(200).json(found)
        } else {
            res.status(404).json('No Resource to Display')
        }
    }
    catch{
        res.status(500).json('Error with Database')
    }
})

// Add Project
//------------
router.post('/Project', async (req, res) => {
    const project = req.body
    try {
        const newProject = await Project.addProject(project)
        if (newProject) {
            res.status(201).json('New Project added')

        } else {
            res.status(404).json('Unable to add new Project')
        }
    }
    catch{
        res.status(500).json('Error with Database')
    }
})

//Get Projects
//-------------
router.get('/Project', async (req, res) => {
    try {
        const found = await Project.getProjects()
        if (found) {
            res.status(200).json(found)
        } else {
            res.status(404).json('No Record')
        }
    }
    catch{
        res.status(500).json('Error ')
    }
})

//Get Project by ID
router.get('/Project/:id', async (req, res) => {
    const { id } = req.params
    try {
        const found = await Project.getProjectById(id)
        if (found) {
            res.status(200).json(found)
        } else {
            res.status(404).json('No Data')
        }
    }
    catch{
        res.status(500).json('Database error')
    }
})

//Add Task
//---------
router.post('/Project/:id/Task', async (req, res) => {

    try {
        await Project.addTaskByProjectId({ project_id: req.params.id, task_desc: req.body.Description, task_note: req.body.Note, completed: req.body.completed })
        res.status(201).json('New Task added')

    }
    catch{
        res.status(500).json('Error with Database')
    }
})

//Get Task by Project Id
//-----------------------
router.get('/Project/:id/Task', async (req, res) => {
    const id = req.params.id
    try {
        const found = await Project.getTaskByProjectID(id)
        if (found) {
            res.status(200).json(found)
        } else {
            res.status(404).json('No Task found')
        }
    }
    catch{
        res.status(500).json('Error with Database')
    }
})
module.exports = router;