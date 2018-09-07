const express = require('express');
const router = express.Router();
const knex = require('knex');

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

router.use(express.json());

//actions
router.get('/', async (req, res) => {
    try {
        const actions = await db('action')
        res.status(200).json( actions );
    }
    catch ( err ) {
        res.status(500).json( err.message );
    };
});

router.post('/', async (req, res) => {
    const newAction = req.body;
    if ( !newAction.description || !newAction.notes || !newAction.project_id ) {
        res.status(400).json({
            message: "Action description/notes and Project ID are required."
        })
    } else {
        try {
            const action = await db.insert(newAction).into('action')
            res.status(201).json( action )
        }
        catch ( err ) {
            res.status(500).json( err.message );
        };
    };
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const action = await db('action').where({ id });
        res.status(200).json( action )
    }
    catch ( err ) {
        res.status(500).json( err.message );
    };
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updateAction = req.body;
    if ( !updateAction.name || !updateAction.description ) {
        res.status(400).json({
            message: "Action name and description are required."
        })
    } else {
        try {
            const updated = await db('action').where({ id }).update(updateAction)
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
        const deleted = db('Action').where({ id }).del();
        res.status(200).json( deleted );
    }
    catch ( err ) {
        res.status(500).json( err.message );
    };
});

module.exports = router;