const express = require('express');

const db = require('../dataModels/projectsModel.js');

const router = express.Router();

//router.use(express.json())
router.get('/', (req,res) => {
    db.find().then(table => {
        res.json(table)
    })
})
router.get('/actions/:id', (req,res) => {
    const {id} = req.params
    db.findProjectsActions(id).then(table => {
        res.json(table)
    })
})

router.post('/', (req,res) => {
    const {name, description, completed} = req.body
    db.add({name, description, completed}).then(() => {
        db.find().then(table => {
            res.json(table)
        })
    })
})

module.exports = router;