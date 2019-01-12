const express = require('express');
const router = express.Router();
const knex = require('knex');
const dbconfig = require('../knexfile');
const db = knex(dbconfig.development);


router.post('/', (req, res) => {
    const action = req.body;
    if (!action) {
        res.status(404)
            .json({ error: "Please provide action info." })
        return
    }
    db('actions').insert(action)
        .then(id => {
            res
                .status(201)
                .json(id)
        }).catch(err => {
            console.log(err)
            res
                .status(500)
                .json({ error: "Error adding action to database", err })
        })
})

module.exports = router;