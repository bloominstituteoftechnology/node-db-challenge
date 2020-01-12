const express = require("express")
const db = require("../db-config")
const Tasks = require("./Tasks-model")
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const allTasks = await Tasks.findAll()
        res.json(allTasks)
    }
    catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const id = await Tasks.add(req.body)
        res.status(201).json(await Tasks.findById(id))
    }
    catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const task = await Tasks.findById(req.params.id)
        res.json(task)
    }
    catch(err) {
        next(err)
    }
})


module.exports = router