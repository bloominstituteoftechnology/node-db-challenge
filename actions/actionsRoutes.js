const express = require('express');

const actions = require('./actionsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    actions
    .getaction()
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
    const action = req.body;

    actions
        .addAction(action)
        .then(ids => {
            res.status(201).json(ids[0]);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;