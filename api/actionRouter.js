const codes = require('../data/statusCodes');

const express = require('express');
const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res, next) => {
    db('actions')
    .then(response => {
        res.status(codes.OK).json(response);
    })
    .catch(err => {
        next(err);
    })
})



module.exports = router;
