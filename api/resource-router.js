const express = require('express');
Resources = require('./resource-module');

const router = express.Router()

router.get('/', (req, res) => {
    Resources.getResource()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            console.log("GET Resource", err)
            res.status(500).json({ message: 'Failed to get list of Resources' })
        })
});

router.post('/', (req, res) => {
    const newResource = req.body
    Resources.insert(newResource)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            console.log("POST resource", err)
            res.status(500).json({ error: "Could not save the resource to the database" })
        })

})


module.exports = router