// express
const express = require('express');

// bring in knex helpers
const modelHelpers = require('./helpers.js');

// this enables modularity
// instead of having to use the same server, we can place it in the Router()
const router = express.Router();

// GET
router.get('/', (req, res) => {
    getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => res.status(500).json(err));
})
// POST

module.exports = router;