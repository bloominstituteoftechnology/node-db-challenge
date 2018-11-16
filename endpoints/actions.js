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

//post actions

router.post('/', (req, res) => {
    const newActions = req.body;
    db('actions')
        .insert(newActions)
        .then(action => {
            action
                ? res.status(200).json(action)
                : res.status(404).json({ Message: 'action not added' })
        })
        .catch(err => {
            res.status(500).json({ Message: 'Error', err })
        })
});

module.exports = router;