const express = require('express');

const Rescources = require('./resources-model');

const router = express.Router();

router.get('/', (req,res) => {
    Rescources.find()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(error => {
        res.status(500).json({error: 'error'})
    })
})

router.post('/', (req,res) => {
    const resourceData = req.body

    Rescources.add(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(error => {
        res.status(500).json({error: 'error'})
    })
})

module.exports = router;