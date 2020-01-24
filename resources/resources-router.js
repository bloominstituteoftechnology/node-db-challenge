const express = require('express')
const db = require('../data/db-config')
const Resources = require('./resource-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const allResources = await Resources.getAll()
        res.json(allResources)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const resource = await Resources.getById(req.params.id)
        res.json({resource})
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {

        const id = await Resources.add(req.body)
        res.status(200).json(await Resources.getById(id))

    } catch (errpr) {
        next (error)
    }
} ) 

module.exports = router