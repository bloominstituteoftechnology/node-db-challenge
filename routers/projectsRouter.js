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

router.post('/', (req, res) => {
    const { project, description, completed} = req.body
    db('projects').insert({project, description, completed}).then(project => {
        res.status(200).json(project)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { project, description, completed} = req.body
    db('projects').where({id: id}).update({project, description, completed}).then(post => {
        res.status(200).json(post)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    db('projects').where({id}).del().then(project => {
        res.status(200).json(project)
    }).catch(err => {
        res.status(400).json(err)
    })
})
module.exports = router;