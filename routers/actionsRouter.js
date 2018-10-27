const express = require('express');
const db = require('../data/db')
const router = express.Router();

router.get('/', (req, res) => {
    db('actions').then(action => {
        res.status(200).json(action);
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    db('actions').where({ id: id }).then(id => {
        res.status(200).json(id)
    }).catch(err => {
        res.status(404).json(err);
    })
})

router.post('/', (req, res) => {
    const { action, project_id, note, action_complete} = req.body
    db('actions').insert({action, project_id, note, action_complete}).then(action => {
        res.status(200).json(action)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { action, note, action_complete } = req.body
    db('actions').where({id}).update({action, note, action_complete}).then(action => {
        res.status(201).json(action)
    }).catch(err => {
        res.status(400).json(err)
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    db('actions').where({ id }).del().then(action => {
        res.status(200).json(action)
    }).catch(err => {
        res.status(400).json(err)
    })
})


module.exports = router;