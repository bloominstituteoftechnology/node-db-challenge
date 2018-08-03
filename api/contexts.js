const express = require('express')
const router = express.Router();
const db = require('./../data/helpers/Contexts');


router.get('/', (req, res) => {
    db.getContexts()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'The contexts information could not be retrieved.'})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.getContextById(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'The context information could not be retrieved.'})
    })
})

router.post('/', (req, res) => {
    const context = req.body;
    db.insert(context)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err =>{
        res.status(500).json({error: 'There was an error saving the context to the database.'})
    })
})

router.put('/:id', (req, res) => {
    const context = req.body;
    const id = req.params.id;
    db.update(id, context)
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
        res.status(500).json({error: 'Context could not be deleted.'})
    })
})

module.exports = router;