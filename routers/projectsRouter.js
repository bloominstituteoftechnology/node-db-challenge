const express = require('express');
const db = require('../data/db');
const router = express.Router();

router.get('/', (req, res) => {
    db('projects').then(project => {
        res.status(200).json(project)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    db('projects').where({id : id}).then(id => {
        res.status(200).json(id)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id/actions', (req, res) => {
    const { id } = req.params
    db('actions').where({project_id: id}).then(id => {
        res.status(200).json(id);
    }).catch(err => {
        res.status(500).json(err)
    })
})


module.exports = router;