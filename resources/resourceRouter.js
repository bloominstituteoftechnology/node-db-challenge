const express = require('express');
const router = express.Router()

const resources = require('./model_resources.js');

router.get("/", (req, res) => {

    resources.findResources()
        resources.findResources()
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Which resources?' })
        });
});

router.post("/", (req, res) => {

    resources.addResources(req.body)
        .then(newResource => {
            res.status(201).json(newResource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not add resource!' })
        });
});


module.exports = router; 


