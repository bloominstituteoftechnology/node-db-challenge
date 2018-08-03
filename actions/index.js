const express = require('express');
const router = express.Router();
const db = require('../data/helpers/actionDb');

router
    .get('/', async (req, res) => {
        try {
            const records = await db.get();
            res.status(200).json(records);    
        } catch(err) {
            res.status(500).json({error: err});
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const {id} = req.params;
            const record = await db.get(id);
            res.status(200).json(record);
        } catch(err) {
            res.status(500).json({error: err});
        }
    })
    .post('/', async (req, res) => {
        try {
            const newRecord = {...req.body};
            const record = await db.add(newRecord);
            res.status(200).json(newRecord);
        } catch(err) {
            res.status(500).json({error: err});
        }
    })
    .put('/:id', async (req, res) => {
        try {
            const {id} = req.params;
            const changes = {...req.body};
            const edit_record = await db.edit(id, changes);
            const record = await db.get(id);
            res.status(200).json(changes);
        } catch(err) {
            res.status(500).json({error: err});
        }
    })
    .delete('/:id', async (req, res) => {
        try {
            const {id} = req.params;
            const record = await db.get(id); 
            const deleted_record = await db.delete(id);
            res.status(200).json(record);
        } catch(err) {
            res.status(500).json({error: err});
        }
    });

module.exports = router;
