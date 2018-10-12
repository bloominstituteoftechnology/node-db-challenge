const express = require('express');
const knex = require('knex');
 
const dbConfig = require('../knexfile');
 
const dbActions = knex(dbConfig.development);

const router = express.Router();
 
 router.get('/', (req,res) => {
    dbActions('actions')
    .then (actions =>{
    res.status(200).json(actions)
    })
    .catch(err => res.status(500).json(err))
});

router.get('/:id', (req,res) => {
    dbActions('actions')
    .where({ id: req.params.id })
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
    const action = req.body;
    if(!action) {
        res.status(400).status({ error: "Please provide a name for the action"})
    }
    dbActions.insert(action)
    .into('actions')
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err)) 
});

router.delete('/:id', (req, res) =>{
    dbActions('actions')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        if(count) {
        res.status(204).end()
        } else {
        res.status(404).json({ error: "There was no action with this id found"})
        }
    })
    .catch(err => res.status(500).json(err))
});

router.put('/:id' , (req ,res) => {
    const action = req.body;
    dbActions('actions')
    .where({ id: req.params.id })
    .update(action)
    .then(action => {
    if(action) {
        res.status(200).json({ message: "This action has been updated"})
    } else {
       res.status(404).json({ message: "No action with this id was found"})
    }
    })
    .catch( err =>{
    res.status(500).json({ message: "Update Failed"})
    })
});

module.exports = router;