const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

router.get('/', (req, res) => {
    db('atns')
        .then(atns => {
            res.status(200).json(atns);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    const atnsidv = req.body;

    db('atns')
        .insert(atnsidv)
        .into('atns')
        .then(ids => {
            if (!atnsidv.atns_dsc) {
                res.status(400).send({ error: "Please provide a description for the action" })
            }
            res.status(201).json(ids[0]);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;