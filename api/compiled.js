const express = require('express')
const router = express.Router();
const db = require('./../data/helpers/CompilerDb');


router.get('/', (req, res) => {
    db.getTables()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'The actions information could not be retrieved.'})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.getTableById(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'The table information could not be retrieved.'})
    })
})

router.post('/', (req, res) => {
    const table = req.body;
    db.insert(table)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err =>{
        res.status(500).json({error: 'There was an error saving the table to the database.'})
    })
})

router.put('/:id', (req, res) => {
    const table = req.body;
    const id = req.params.id;
    db.update(id, table)
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
        res.status(500).json({error: 'Table could not be deleted.'})
    })
})

module.exports = router;