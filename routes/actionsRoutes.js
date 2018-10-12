const express = require('express');
const actions = require('../models/dataModel.js');
const router = express.Router();

router.post('/', (req, res)=>{
    const {description, notes, completed} = req.body;
    const action = {description, notes, completed};
    actions.postAction(action)
        .then(id=>{
            res.status(200).json(id);
        })
        .catch(err => res.status(500).json(err.message));
})

module.exports = router;