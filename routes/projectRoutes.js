const express = require('express');
const router = express.Router();
const knex = require('knex');

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

router.use(express.json());

//projects
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
            res.status(201).json( project )
        }
        catch ( err ) {
            res.status(500).json( err.message );
        };
    };
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const project = await db('project').where({ id });
        res.status(200).json( project )
    }
    catch ( err ) {
        res.status(500).json( err.message );
    };
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updateProject = req.body;
    if ( !updateProject.name || !updateProject.description ) {
        res.status(400).json({
            message: "Project name and description are required."
        })
    } else {
        try {
            const updated = await db('project').where({ id }).update(updateProject)
            res.status(200).json( updated );
        }
        catch ( err ) {
            res.status(500).json( err.message )
        };
    };
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = db('project').where({ id }).del();
        res.status(200).json( deleted );
    }
    catch ( err ) {
        res.status(500).json( err.message );
    };
});

module.exports = router;