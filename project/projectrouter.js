const db = require('../data/db-config')
const express = require('express')
const projectdb = require('./projectmodel')

const router = express.Router();



router.get('/', (req, res) => {
    projectdb.get()
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
    projectdb.getById(id)
        .then(project => {
            res.status(201).json({message: "it worked"})
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


router.post('/', (req,res) => {
    const projectObj = req.body;
    projectdb.insert(projectObj)
    .then(project => {
        res.status(201).json({message: "project updated"})
    })
    .catch(err => {
        res.status(201).json(err)
    })
})


module.exports = router;