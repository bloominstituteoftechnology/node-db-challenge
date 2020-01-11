const express = require("express")
const db = require("../data/db-config")

const Project_resources = require("./prores.model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        return res.json(await Project_resources.find())
    }
    catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const project_resource = await Project_resources.findById(id)

        if (project_resource) {
            return res.json(project_resource)
        } else {
            return res.status(404).json({ message: "Could not find project_resource with this Id." })
        }

    }
    catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const id = await Project_resources.add(req.body) //returns an array

        const projectResource = await Project_resources.findById(id)

        return res.status(201).json(projectResource)
    }
    catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params //returns an object
        const projectResource = await projectResourceModel.update(id, req.body)

        if (projectResource) {
            res.json(projectResource)
        } else {
            return res.status(404).json({
                message: "Could not find project-resource with given ID",
            })
        }
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = await db("project_resources")
            .where({ id: req.params.id })
            .del()
        return res.status(200).json({ id: req.params.id })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router