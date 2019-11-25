const db = require('../data/db-config')
const express = require('express')
const project = require('./projectmodel')

const router = express.Router();



router.get('/', (req, res) => {
    project.get()
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({ error: "there was an error" })
        })
})

router.get('/:id', (req,res) => {
    const { id } = req.body.id
    console.log(req.body)
    project.getById(id)
        .then(project => {
            res.status(201).json({message: "it worked"})
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


router.post('/:id', (req,res) => {
    const proID = req.body.id
    const projectObj = req.body;
    project.update(proID, projectObj)
    .then(project => {
        res.status(201).json({message: "project updated"})
    })
    .catch(err => {
        res.status(201).json(err)
    })
})


module.exports = router;