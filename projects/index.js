const express = require('express');
const router = express.Router();
const projectDb = require('../data/helpers/projectDb');

router
    .get('/', async (req, res) => {
        try {
            const projects = await projectDb.get();
            res.status(200).json(projects);    
        } catch(err) {
            res.status(500).json({err});
        }
    })

module.exports = router;
