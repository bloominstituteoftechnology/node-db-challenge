const express = require('express')
const db = require('../data/db-config')
const Tasks = require('./task-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const allTasks = await Tasks.getAll()
        res.json(allTasks)
    } catch (error) {
        next(error)
    }
})



 router.post('/', async (req, res, next) => {
     try { 
         const id = await Tasks.add(req.body)
         res.status(200).json(await Tasks.getById(id))
     } catch(error) {
         next(error)
     }
 })
module.exports = router