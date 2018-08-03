const express = require('express');
const router = express.Router();
const actionDb = require('../data/helpers/actionDb');

router
    .get('/', async (req, res) => {
        try {
            const records = await actionDb.get();
            res.status(200).json(records);    
        } catch(err) {
            res.status(500).json({error: err});
        }
    });

module.exports = router;
