const express = require('express');

const db = require('../dataModels/actionsModel.js');

const router = express.Router();

//router.use(express.json())

router.post('/', (req,res) => {
    const {name, description, notes,completed} = req.body
    db.add({name, description, notes, completed}).then(() => {
        db.find().then(table => {
            res.json(table)
        })
    })
})

module.exports = router;