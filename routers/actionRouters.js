const express = require('express');
const router = express.Router();
// const knex = require('knex');
// const dbConfig = require('../knexfile.js');
const dbActionHelpers = require('../data/db_actionHelpers');

router.post('/', (req, res) => {
    const action = req.body;
    dbActionHelpers.addAction(action)
        .then(actionInfo => {
            res.send(actionInfo)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to insert action' })
        });
});

router.get('/', (req, res) => {
    dbActionHelpers.getActions()
        .then(actionInfo => {
            res.send(actionInfo)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get actions' })
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    dbActionHelpers.getActionById(id)
        .then(actionInfo => {
            res.send(actionInfo)
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get action' })
        })
});

module.exports = router;