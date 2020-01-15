const express = require('express');
const router = express.Router()

const resources_list = require('./model_resources.js');

router.get("/", (req, res) => {

    resources_list.findResources()
        resources.findResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Which resources?' })
        });
});

router.post("/", (req, res) => {

    resources_list.addResources(req.body)
        .then(newResource => {
            res.status(201).json(newResource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not add resource!' })
        });
});


module.exports = router; 


