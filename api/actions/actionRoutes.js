const express = require('express');
const actionDb = require('../../data/helpers/actionDb');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await actionDb.get();
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const response = await actionDb.get(req.params.id);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;