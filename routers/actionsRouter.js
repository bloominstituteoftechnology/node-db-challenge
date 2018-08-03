const express = require('express');
const db = require('../data/db')
const router = express.Router();

router.get('/', (req, res) => {
    db('actions').then(action => {
        res.status(200).json(action);
    }).catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;