const express = require("express")
const Tasks = require("./task-model.js")

const router = express.Router({ mergeParams: true })

router.post("/", (req, res) => {
    const { id } = req.params
    Tasks.insert({...req.body, projectId: id})
    .then( taskId => {
        res.status(201).json({
            id: taskId[0], projectId: Number(id), ...req.body
        })
    })
    .catch( err => {
        res.status(500).json({
            errorMessage: "Failed to create task."
        })
    })
})

router.get("/", (req, res) => {
    Tasks.find(req.params.id)
    .then( resp => {
        res.status(200).json(resp)
    })
    .catch( err => {
        res.status(500).json({
            errorMessage: "Failed to get task."
        })
    })
})

module.exports = router