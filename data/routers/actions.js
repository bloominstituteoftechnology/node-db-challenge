// intialize route
const express = require('express');
const router = express.Router();
const db = require('../models/actionsModel');

// add middleware
const numberIdCheck = require('../middleware/numberIdCheck');

// CRUD logic

// Create/Post logic
router.post('/', (req, res) => {
    const action = req.body;
    const description = req.body.description
    if (description) {
        db
            .insert(action)
            .then(newAction => {
                    res
                    .status(201)
                    .json(newAction)
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ err: 'Failed to insert action!'})
            });
    } else if (!description) {
        res
            .status(400)
            .json({ err: 'Bad request [description is empty]'})
    } else {
        res
            .status(500)
            .json({ err: 'Failed to add action'})
    }
})  

// Read/get logic

router.get('/', (req, res) => {
    db
        .find()
        .then(actions => {
            res
            .status(200)
            .json(actions);
        })
        .catch(err => {
            res
                .status(500)
                .json({ err: 'Could not retrieve actions from database' });
        });
})

module.exports = router;