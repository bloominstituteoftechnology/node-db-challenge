const express = require('express');

const ResourceModel = require('./resourceModel.js');

const router = express.Router();

// post equals find, find all resources
router.get('/', (req, res) => {
    ResourceModel.findAll()
    .then(resources => {
        res.status(200).json(resources);
    })
     .catch(error) 
            res.status(500).json
        ({ message: 'Resource not found', error });
    });

    // post equals add, add a new resource
    router.post('/', (req, res) => {
        const newResource = req.body;
        debug('resources')
        .insert(newResource)
        .then(resources => {
            res.status(201).json(resources);
        })
         .catch(error) 
                res.status(500).json
            ({ message: 'New resource not created', error });
        });


    module.exports = router;