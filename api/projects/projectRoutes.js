const express = require('express');
const projectDb = require('../../data/helpers/projectDb');

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, description, completed } = req.body;
    if (!name || !description) return res.status(404).json({ error: 'Please provide name and description' });
    try {
        const response = await projectDb.insert({ name, description, completed });
        return res.status(201).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

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

router.put('/:id', async (req, res) => {
    const { name, description, completed } = req.body;
    if (!name || !description) return res.status(404).json({ error: 'Please provide name and description' });
    try {
        const response = await projectDb.update(req.params.id, { name, description, completed });
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const response = await projectDb.remove(req.params.id);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;