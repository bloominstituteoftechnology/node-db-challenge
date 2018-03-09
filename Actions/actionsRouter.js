const express = require('express');
const knex = require('../database/dbConfig');
const projects_db = require('./actionsController.js');

const actionsRouter = express.Router()

// Posts routes
actionsRouter.post('/', (req, res) => {
    const { description, notes, completed } = req.body;

    if (!description || !notes) {
        res.status(404).json({ message: 'A description and notes must be provided' });
    } else {
        projects_db.addAction(req.body)
            .then(response => {
                res.status(201).json({ message: 'Action has been added' });
            })
            .catch((error) => {
                res.status(500).json({ message: 'cannot add action to database.' });
            })
    }
});

actionsRouter.get('/', (req, res) => {
    projects_db.allActions()
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch((error) => {
            res.status(500).json({ message: 'Unable to retrieve Actions from database.' })
        })
});

actionsRouter.get('/:id', (req, res) => {
    const id = req.params.id;

    projects_db.getID(id)
        .then(action => {
            res.status(201).json(action)
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error finding the action in the database.' });
        });
});

actionsRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const action = req.body;

    projects_db.updateAction(id, action)
        .then(resonse => {
            res.status(201).json({ message: 'Action has been updated!' });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error updating the action.' });
        })
})

actionsRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    projects_db.deleteAction(id)
        .then(response => {
            res.status(202).json({ message: 'Action has been deleted' });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error deleting Action from database.' });
        })
});

module.exports = actionsRouter;