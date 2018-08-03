const express = require('express');
const router = express.Router();
const projectDb = require('../data/helpers/projectDb');

router
    .get('/', async (req, res) => {
        try {
            const records = await projectDb.get();
            res.status(200).json(records);    
        } catch(err) {
            res.status(500).json({error: err});
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const {id} = req.params;
            const record = await projectDb.get(id);
            res.status(200).json(record);
        } catch(err) {
            res.status(500).json({error: err});
        }
    });

module.exports = router;
