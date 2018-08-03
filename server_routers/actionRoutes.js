const db = require('../data/helpers/actionsDB');

const express = require('express');

const router = express.Router();

function sendError(code, message, error) {
    return {
        code: code,
        message: message,
        error: error
    }
}

//endpoint for GET
router.get('/', async (req, res, next) => {
    try {
        const response = await db.get();
        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, 'Fail to retrieve actions informations.', error.message))
    }
})

//endpoint for GET with id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const response = await db.get(id);
        if (response.length === 0) {
            return next(sendError(404, 'Failed to retrieve action information', 'The action for this specific id does no exist.'))
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        next(sendError(500, 'Fail to retrieve action informations.', error.message))
    }
})

//endpoint for POST 
router.post('/', async (req, res, next) => {
    if (!(req.body.notes && req.body.description && req.body.project_id)) {
        return next(sendError(400, "Fail to save actions to database.", "Please provide project ID, notes, and description of action."))
    }

    try {
        const response = await db.insert(req.body);
        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, "Fail to save actions to database.", error.message))
    }
})

//endpoint for DELETE
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const action = await db.get(id);
        if (action.length === 0) {
            return next(sendError(404, 'Failed to remove action.', 'The action for this specific id does no exist.'))
        }
        await db.remove(id);
        res.status(200).json(action);
    } catch (error) {
        next(sendError(500, "Fail to remove actions.", error.message))
    }
})

//endpoint for PUT
router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    if ((!req.body.description && !req.body.notes && !req.body.project_id)) {
        return next(sendError(400, "Fail to update actions.", "Please provide information of action to be updated."))
    }

    try {
        const response = await db.update(id, req.body);
        if (response === null) {
            return next(sendError(404, 'Failed to update action.', 'The action for this specific id does no exist.'))
        }
        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, "Fail to update actions.", error.message))
    }
})

module.exports = router;