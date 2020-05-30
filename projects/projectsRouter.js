const express = require("express")
const Projects = require("./project-model.js")
const ResourceRouter = require("../resources/resourceRouter.js")
const TaskRouter = require("../tasks/taskRouter.js")

const router = express.Router()
router.use("/:id/resources", ResourceRouter)
router.use("/:id/tasks", TaskRouter)

router.post("/", (req, res) => {
    Projects.insert(req.body)
    .then( id => {
        res.status(201).json({id: id[0], ...req.body})
    })
    .catch( err => {
        res.status(500).json({
            errorMessage: "Failed to create."
        })
    })
})

router.get("/", (req, res) => {
    Projects.find()
    .then( projects => {
        res.status(200).json(projects)
    })
    .catch( err => {
        res.status(500).json({
            errorMessage: "Failed to get projects."
        })
    })
})

router.get("/:id", (req, res) => {
    
    Projects.findById(req.params.id)
    .then( project => {
        res.status(200).json(project)
    })
    .catch( err => {
        res.status(500).json({
            errorMessage: "Faild to get project."
        })
    })
})

module.exports = router