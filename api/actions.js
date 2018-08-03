const express = require('express')
const router = express.Router();
const db = require('./../data/helpers/projectDB');

/*
router.get('/', (req, res) => {
    getProjects()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'The projects information could not be retrieved.'})
    })
})
*/

module.exports = router;