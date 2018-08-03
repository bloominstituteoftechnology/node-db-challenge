const express = require('express');
const db = require('../data/helpers/actionDB');

const router = express.Router();

// GET Action

router.get('/', async (req, res) => {
    try {
        const response = await db.get();
        res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

// GET :id Action

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const response = await db.get(id);
        if (response.length===0) {
            return res.status(404, 'Failed to retrieve action information')
        }
        res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

// POST Action

router.post('/', async (req, res) => {
    if (!(req.body.notes && req.body.description && req.body.project_id)) {
        return res.status(400, 'Failed to save actions to database.')
    }
    try {
        const response = await db.insert(req.body);
        res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

// PUT Action

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    if ((!req.body.description && !req.body.notes && !req.body.project_id)) {
        return res.status(400, 'Failed to update actions.')
    } 
    try {
        const response = await db.update(id, req.body);
        if (response===null) {
            return res.status(404, 'Failed to update action.')
        }
        res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

// DELETE Action

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const action = await db.get(id);
        if (action.length===0) {
            return res.status(404, 'Failed to remove action.')
        }
        await db.remove(id);
        res.status(200).json(action);
    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;