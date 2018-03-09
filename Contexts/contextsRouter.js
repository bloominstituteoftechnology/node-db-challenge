const express = require('express');
const knex = require('../database/dbConfig');
const projects_db = require('./contextsController.js');

const contextsRouter = express.Router()

// Posts routes
contextsRouter.post('/', (req, res) => {
    const { context } = req.body;

    if (!context) {
        res.status(404).json({ message: 'A context must be provided' });
    } else {
        projects_db.addContext(req.body)
            .then(response => {
                res.status(201).json({ message: 'Context has been added' });
            })
            .catch((error) => {
                res.status(500).json({ message: 'cannot add context to database.' });
            })
    }
});

contextsRouter.get('/', (req, res) => {
    projects_db.allContexts()
        .then(contexts => {
            res.status(200).json(contexts)
        })
        .catch((error) => {
            res.status(500).json({ message: 'Unable to retrieve Contexts from database.' })
        })
});

contextsRouter.get('/:id', (req, res) => {
    const id = req.params.id;

    projects_db.getID(id)
        .then(context => {
            res.status(201).json(context)
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error finding the context in the database.' });
        });
});

contextsRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const context = req.body;

    projects_db.updateContext(id, context)
        .then(resonse => {
            res.status(201).json({ message: 'Context has been updated!' });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error updating the context.' });
        })
})

contextsRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    projects_db.deleteContext(id)
        .then(response => {
            res.status(202).json({ message: 'Context has been deleted' });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error deleting Context from database.' });
        })
});

module.exports = contextsRouter;