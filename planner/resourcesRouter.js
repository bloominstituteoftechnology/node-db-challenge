const express = require("express")
const db = require("../data/dbConfig")
const Resources = require("./resources-model")
const router = express.Router()

// `GET request /api/resources/ retrieves all resources
router.get('/', (req,res) => {
    Resources.findAll()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        console.log(err, "Error in getting list of all resources");
        res.status(500).json({error: "Error cannot get list of resources."})
    })
})


//Post request to api/resources adds new resource
router.post('/', (req, res) => {
    const newResource = req.body;
 db('resources')
    .insert(newResource)
    .then(resources => {
        res.status(201).json(resources);
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;