const express = require("express")
const db = require("../data/db-config")

const Tasks = require("./task-model")

const router = express.Router()

router.get("/api/tasks", async (req, res, next) => {
    try {
        return res.json(await Tasks.find())
    }
    catch (err) {
        next(err)
    }
})

router.get("/api/task/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const task = await Tasks.findById(id)

        if (task) {
            return res.json(task)
        } else {
            return res.status(404).json({ message: "Could not find task with this Id." })
        }

    }
    catch (err) {
        next(err)
    }
})

router.post("/api/tasks", async (req, res, next) => {
    try {
        const [id] = await Tasks.add(req.body) //returns an array

        const task = await Tasks.findById(id)

        return res.status(201).json(task)
    }
    catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params //returns an object
        const task = await taskModel.update(id, req.body)

        if (task) {
            res.json(task)
        } else {
            return res.status(404).json({
                message: "Could not find task with given ID",
            })
        }
    } catch (err) {
        next(err)
    }
})

router.delete("/api/task/:id", async (req, res, next) => {
    try {
        const { id } = await db("tasks")
            .where({ id: req.params.id })
            .del()
        return res.status(200).json({ id: req.params.id })
    }
    catch (err) {
        next(err)
    }
})