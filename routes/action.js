const express = require('express');
const router = express.Router();

const actionDB = require('../data/helpers/actionDb');

router.post('/', (req, res) => {
    const action = req.body;

    actionDB.add(action)
        .then(actionId => {
            res.status(201).json(actionId);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to insert action' });
        });
    });

module.exports = router;