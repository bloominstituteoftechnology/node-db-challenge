const express = require("express")
const db = require("../data/db-config")

const Projects = require("./project-model")

const router = express.Router()

router.get("/api/projects", async (req, res, next) => {
    try {
        return res.json(await Projects.find())
    }
    catch (err) {
        next(err)
    }
})

router.get("/api/projects/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const project = await Projects.findById(id)

        if (project) {
            return res.json(project)
        } else {
            return res.status(404).json({ message: "Could not find project with this Id." })
        }

    }
    catch (err) {
        next(err)
    }
})

router.post("/api/projects", async (req, res, next) => {
    try {
        const [id] = await Projects.add(req.body) //returns an array

        const project = await Projects.findById(id)

        return res.status(201).json(project)
    }
    catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params //returns an object
        const project = await projectModel.update(id, req.body)

        if (project) {
            res.json(project)
        } else {
            return res.status(404).json({
                message: "Could not find project with given ID",
            })
        }
    } catch (err) {
        next(err)
    }
})

router.del("/api/projects/:id", async (req, res, next) => {
    try {
        const { id } = await db("projects")
            .where({ id: req.params.id })
            .del()
        return res.status(200).json({ id: req.params.id })
    }
    catch (err) {
        next(err)
    }
})