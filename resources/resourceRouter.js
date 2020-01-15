const express = require('express');
const router = express.Router()

const resources_list = require('./model_resources.js');

router.get("/", (req, res) => {
<<<<<<< HEAD
    resources_list.findResources()
=======
        resources.findResources()
>>>>>>> 8a1f7ed64fb21bb336fe79f7d1f2fad51df2cdb4
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

<<<<<<< HEAD
module.exports = router; 
=======
module.exports = router;
>>>>>>> 8a1f7ed64fb21bb336fe79f7d1f2fad51df2cdb4
