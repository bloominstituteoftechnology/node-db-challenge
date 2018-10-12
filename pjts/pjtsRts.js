const express = require('express');
const pjts = require('./pjtsMdl');
const router = express.Router();

router.get('/', (req, res) => {
    pjts
        .findPjts()
        .then(pjts => {
            res.status(200).json(pjts);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    pjts
        .findPjtsById(id)
        .then(pjts => {
            res.status(200).json(pjts);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    const pjtsidv = req.body;

    pjts
        .addPjts(pjtsidv)
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