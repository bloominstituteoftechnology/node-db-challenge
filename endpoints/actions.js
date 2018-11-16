const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

const router = express.Router();

//get all actions

router.get('/', (req, res) => {
    db('actions')
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});


module.exports = router;