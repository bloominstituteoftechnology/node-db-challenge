const express = require('express');
const atns = require('./atnsMdl');
const router = express.Router();

router.get('/', (req, res) => {
    atns
        .findAtns()
        .then(atns => {
            res.status(200).json(atns);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    const atnsidv = req.body;

    atns
        .addAtns(atnsidv)
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