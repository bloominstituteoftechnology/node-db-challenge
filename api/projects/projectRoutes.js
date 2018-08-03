const express = require('express');
const projectDb = require('../../data/helpers/projectDb');

const router = express.Router();

router.post('/', async (req, res, next) => {
    const { name, description, completed } = req.body;
    if (!name || !description) return next({ code: 400, errorMessage: 'Please provide name and description' });
    try {
        const response = await projectDb.insert({ name, description, completed });
        return res.status(201).json(response);
    } catch (err) {
        return next({ code: 500, error: "There was an error while saving the project to the database." });
    }
})

router.get('/', async (req, res, next) => {
    try {
        const response = await projectDb.get();
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: "The projects information could not be retrieved." });
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const response = await projectDb.get(req.params.id);
        if (!response) return next({ code: 404, message: 'The project with the specified ID does not exist!' });
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: "The project information could not be retrieved." });
    }
})

router.put('/:id', async (req, res, next) => {
    const { name, description, completed } = req.body;
    if (!name && !description && !completed) return next({ code: 400, errorMessage: 'Please provide something to edit!' });
    try {
        const response = await projectDb.update(req.params.id, { name, description, completed });
        if (response === 0) return next({ code: 404, message: 'The project with the specified ID does not exist!' });
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: "The project information could not be modified." });
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const response = await projectDb.remove(req.params.id);
        if (response === 0) return next({ code: 404, message: 'The project with the specified ID does not exist!' });
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: "The project could not be removed." });
    }
})

module.exports = router;