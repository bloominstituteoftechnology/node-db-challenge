const express = require('express')
const router = express.Router();
const db = require('./../data/helpers/ActionsDB');


router.get('/', (req, res) => {
    db.getActions()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'The actions information could not be retrieved.'})
    })
})

router.post('/', (req, res) => {
    const action = req.body;
    db.insert(action)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err =>{
        res.status(500).json({error: 'There was an error saving the action to the database.'})
    })
})

router.put('/:id', (req, res) => {
    const action = req.body;
    const id = req.params.id;
    db.update(id, action)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'There was an error saving changes to the database.'})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.delete(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'Action could not be deleted.'})
    })
})

module.exports = router;