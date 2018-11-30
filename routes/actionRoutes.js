const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
const router = express.Router();

// Routes

// Get Actions
router.get('/', (req, res) => {
    db('actions')
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json({ message: 'There was an error getting your actions' })
        })
});

// Get Individual Actions
router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('actions')
        .where({ id })
        .then(action => {
            res.status(200).json(action)
        })
        .catch( err => {
            res.status(500).json({ message: 'There was an error getting your action' })
        })
})

// Post Actions
router.post('/', (req, res) => {
    const newAction = req.body;

    db('actions')
        .insert(newAction)
        .then(count => {
            res.status(201).json(count)
        })
        .catch(err => {
            res.status(500).json({ message: 'There was an error posting your action' })
        })
});
// Delete Action
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('actions')
        .where({ id })
        .del()
        .then(count => {
            res.status(200).json(count)
        })
        .catch(err => {
            res.status(500).json({ message: 'There was an error deleting your action' })
        })
})



module.exports = router;