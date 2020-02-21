const express = require("express");

const ProjectsModel = require("./project-model")

const router = express.Router();



/////////// *******  GET GET GET PROJECTS PROJECTS  *********** //////////////////

router.get("/", (req, res) => {
    ProjectsModel.find()
        .then (project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({message: "failed to get projects" })
        })
})

/////////// *******  POST POST POST  PROJECTS PROJECTS  *********** //////////////////

router.post("/", (req, res) => {
    const projectData = req.body
    ProjectsModel.add(projectData)
        .then(thing => {
            res.status(201).json({created: thing[0]})
        })
        .catch(err => {
            res.status(500).json({message: "failed to post projects" })
        })
})

/////////// *******  GET GET GET TASKS TASKS  *********** //////////////////

router.get("/tasks", (req, res) => {
    ProjectsModel.findTasks()
        .then (project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({message: "failed to get tasks" })
        })
})


/////////// *******  POST POST POST  TASKS TASKS   *********** //////////////////

router.post("/tasks", (req, res) => {
    const taskData = req.body
    ProjectsModel.addTask(taskData)
        .then(thing => {
            res.status(201).json({created: thing[0]})
        })
        .catch(err => {
            res.status(500).json({message: "failed to post task" })
        })
})

/////////// *******  GET GET GET  RESOURCES RESOURCES  *********** //////////////////

router.get("/resources", (req, res) => {
    ProjectsModel.findResources()
        .then (project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({message: "failed to get resources" })
        })
})

/////////// *******  POST POST POST  RESOURCES RESOURCES RESOURCES   *********** //////////////////

router.post("/resources", (req, res) => {
    const resourceData = req.body
    ProjectsModel.addResource(resourceData)
        .then(thing => {
            res.status(201).json({created: thing[0]})
        })
        .catch(err => {
            res.status(500).json({message: "failed to post resources" })
        })
})









module.exports = router;