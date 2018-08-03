const express = require('express');
const projectDb = require('../../data/helpers/projectDb');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await projectDb.get();
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const response = await projectDb.get(req.params.id);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;