const express = require('express');

const Action = require('../helpers/actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const action = await Action.get(req.params.query);
        res.status(200).json(action);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error retrieving action'
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const action = await Action.insert(req.body);
        console.log(action);
            res.status(201).json(action);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error adding the action'
        });
    }
});



module.exports = router;