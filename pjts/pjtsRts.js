const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

router.get('/', (req, res) => {
    db('pjts')
        .then(pjts => {
            res.status(200).json(pjts);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('pjts')
        .where({ id })
        .first()
        .then(pjtsidv => {
            if (pjtsidv) {
                db('atns')
                .where({ pjts_id: id })
                .then(atns => {
                    pjtsidv.atns = atns;

                    res.status(200).json(pjtsidv);
                })
                .catch(err => {
                    res.json(err);
                });
            } else {
                res.status(404).json({ message: "Not found" });
            }
        })
        .catch(err => {
            res.json(err);
        });
});

router.post('/', (req, res) => {
    const pjtsidv = req.body;

    db('pjts')
        .insert(pjtsidv)
        .into('pjts')
        .then(ids => {
            if (!pjtsidv.pjts_nme) {
                res.status(400).send({ error: "Please provide a name for the project" })
            }
            res.status(201).json(ids[0]);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;