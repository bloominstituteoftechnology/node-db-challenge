const express = require('express')
const router = express.Router();
const db = require('./../data/helpers/projectDB');


router.get('/', (req, res) => {
    db.getProjects()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'The projects information could not be retrieved.'})
    })
})

router.post('/', (req, res) => {
    const project = req.body;
    db.insert(project)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err =>{
        res.status(500).json({error: 'There was an error saving the project to the database.'})
    })
})

router.put('/:id', (req, res) => {
    const project = req.body;
    const id = req.params.id;
    db.update(id, project)
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
        res.status(500).json({error: 'Project could not be deleted.'})
    })
})

module.exports = router;