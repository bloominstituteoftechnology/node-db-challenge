const express = require("express")
const Resources = require("./resource-model.js")
const router = express.Router({ mergeParams: true })

router.post("/", (req, res) => {
    const { id } = req.params
    
    Resources.insert(req.body)
    .then( resourceId => {
        Resources.connectResource(id, resourceId[0])
        .then( resp => {
            res.status(201).json({
                message: "Resource created."
            })
        })
        .catch( err => {
            res.status(500).json({
                errorMessage: "Failed to create resource."
            })
        })
    })
    .catch( err => {
        res.status(500).json({
            errorMessage: "Failed to create resource."
        })
    })
})

router.get("/", (req, res) => {
    Resources.find(req.params.id)
    .then( resp => {
        res.status(200).json(resp)
    })
    .catch( err => {
        res.status(500).json({
            errorMessage: "Failed to get resource."
        })
    })
})

module.exports = router