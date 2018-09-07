const express = require('express');
const router = express.Router();
const knex = require('knex');

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const projects = await db('project')
        res.status(200).json( projects );
    }
    catch ( err ) {
        res.status(500).json( err.message );
    };
});

router.post('/', async (req, res) => {
    const newProject = req.body;
    if ( !newProject.name || !newProject.description) {
        res.status(400).json({
            message: "Project name and description are required."
        })
    } else {
        try {
            const project = await db.insert(newProject).into('project')
            res.status(201).json( project );
        }
        catch ( err ) {
            res.status(500).json( err.message );
        };
    };
});


module.exports = router;