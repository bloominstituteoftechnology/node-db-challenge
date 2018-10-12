const express = require('express');
const project = require('./projectModel.js');
const router = express.Router();

router.get('/', (req, res) => {
    project.getProjects().then(projects => {
        res.status(200).json(projects);
    })
        .catch(err => res.status(500).json(err));
});

module.exports = router;