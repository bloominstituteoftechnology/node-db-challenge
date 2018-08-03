const express = require('express');
const db = require('../data/db');
const router = express.Router();

router.get('/', (req, res) => {
    db.select('projects').then(project => {
        res.status(200).json(project)
    })
})

module.exports = router;