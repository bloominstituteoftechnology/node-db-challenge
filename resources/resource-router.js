const express = require('express');

const Resources = require('./resource-model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({ message: 'Error getting resources from database' });
        });
});

router.post('/', (req, res) => {
    const resource = req.body;

    Resources.add(resource)
        .then(count => {
            res.status(500).json(count)
        })
        .catch(err => {
            res.status(500).json({ message: 'Error adding resource to database' })
        });
});

module.exports = router;