const express = require('express');
const db = require('../data/helpers/projectsDB');
const router = express.Router();

function sendError(code, message, error) {
    return {
        code,
        message,
        error
    }
}

router.get('/', async (req, res, next) => {
    try {
        const response = await db.getProjects();
        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, 'Failed to retrieve projects information.', error.message))
    }
})

module.exports = router;