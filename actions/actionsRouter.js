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
    .where('project_id', '=', req.params.id)
    .insert(req.body)
    .then(ids => {
        res.status(201).json(ids)
    }).catch(err => res.status(500).json(err))
});











module.exports = router;