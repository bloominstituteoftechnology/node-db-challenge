const express = require('express');
const actionDb = require('../../data/helpers/actionDb');

const router = express.Router();

router.post('/', async (req, res, next) => {
    const { description, notes, completed } = req.body;
    if (!description || !notes) return next({ code: 400, errorMessage: 'Please provide description and notes' });
    try {
        const response = await actionDb.insert({ description, notes, completed });
        return res.status(201).json(response);
    } catch (err) {
        return next({ code: 500, error: "There was an error while saving the action to the database." });
    }
})

router.get('/', async (req, res, next) => {
    try {
        const response = await actionDb.get();
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: "The actions information could not be retrieved." });
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const response = await actionDb.get(req.params.id);
        if (!response) return next({ code: 404, message: 'The action with the specified ID does not exist!' });
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: "The action information could not be retrieved." });
    }
})

router.put('/:id', async (req, res, next) => {
    const { description, notes, completed } = req.body;
    if (!description && !notes && !completed) return next({ code: 400, errorMessage: 'Please provide something to edit!' });
    try {
        const response = await actionDb.update(req.params.id, { description, notes, completed });
        if (response === 0) return next({ code: 404, message: 'The action with the specified ID does not exist!' });
        return res.status(201).json(response);
    } catch (err) {
        return next({ code: 500, error: "The action information could not be modified." });
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const response = await actionDb.remove(req.params.id);
        if (response === 0) return next({ code: 404, message: 'The action with the specified ID does not exist!' });
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: "The action could not be removed." });
    }
})

module.exports = router;