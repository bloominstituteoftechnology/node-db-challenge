const express = require("express")
const db = require("../db-config")
const Resources = require("./resources-model")
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const allResources = await Resources.findAll()
        res.json(allResources)
    }
    catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const id = await Resources.add(req.body)
        res.status(201).json(await Resources.findById(id))
    }
    catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const resource = await Resources.findById(req.params.id)
        res.json({resource})
    }
    catch(err) {
        next(err)
    }
})


module.exports = router