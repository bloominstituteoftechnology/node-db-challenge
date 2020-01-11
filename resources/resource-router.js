const express = require("express")
const db = require("../data/db-config")

const Resources = require("./resource-model")

const router = express.Router()

router.get("/api/resources", async (req, res, next) => {
    try {
        return res.json(await Resources.find())
    }
    catch (err) {
        next(err)
    }
})

router.get("/api/resources/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const resource = await Resources.findById(id)

        if (resource) {
            return res.json(resource)
        } else {
            return res.status(404).json({ message: "Could not find resource with this Id." })
        }

    }
    catch (err) {
        next(err)
    }
})

router.post("/api/resources", async (req, res, next) => {
    try {
        const [id] = await Resources.add(req.body) //returns an array

        const resource = await Resources.findById(id)

        return res.status(201).json(resource)
    }
    catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params //returns an object
        const resource = await resourceModel.update(id, req.body)

        if (resource) {
            res.json(resource)
        } else {
            return res.status(404).json({
                message: "Could not find resource with given ID",
            })
        }
    } catch (err) {
        next(err)
    }
})

router.del("/api/resources/:id", async (req, res, next) => {
    try {
        const { id } = await db("resources")
            .where({ id: req.params.id })
            .del()
        return res.status(200).json({ id: req.params.id })
    }
    catch (err) {
        next(err)
    }
})