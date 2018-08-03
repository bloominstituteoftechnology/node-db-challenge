const codes = require('../data/statusCodes');

const express = require('express');
const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res, next) => {
    db('projects')
    .then(response => {
        res.status(codes.OK).json(response);
    })
    .catch(err => {
        next(err);
    })
})
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    db('projects')
    .where('id', id)
    .then(response => {
        res.status(codes.OK).json(response);
    })
    .catch(err => {
        next(err);
    })
})
module.exports = router;
