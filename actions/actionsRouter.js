const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);


//middleware
router.use(express.json());

//endpoints


router.post('/', (req, res) => {
    db('actions')
    .insert(req.body)
    .then(action => {
        res.status(201).json(action)
    }).catch(err => res.status(500).json(err))
});






module.exports = router;