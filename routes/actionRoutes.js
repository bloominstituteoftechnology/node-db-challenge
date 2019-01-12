const express = require('express');
const router = express.Router();

const db = require('../data/actionsModel');

router.get('/', (req, res) => {
    db.get()
        .then(actions => {
            res.json(actions)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not fetch those actions. They've disappeared!" })
        })
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    db.get(id)
        .then(action => {
            if(Object.keys(action).length === 0){
                res.status(404).json({ message: "That's not a valid action ID, didn't you know?" })
            } else {
                res.json(action)
            }
        })
        .catch(err => {
            res.status(500).json({ message: "That action is MIA and could not be fetched. Oops." })
        })
})

module.exports = router;