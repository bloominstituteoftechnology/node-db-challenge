const express = require('express');
const knex = require('../database/db');
const actions = require('../Controls/actionsController');

const actionsRoute = express.Router();

actionsRoute.get('/', (req, res) => {
    return actions.getAll
        .then(actions => {
            if (actions.length) {
                res.status(200).json(actions);
            } else {
                res.status(404).json({ msg: 'Error: Unable to locate actions. Please try again.' });
            }
        })
        .catch(err => {
            res.status(500).json({ msg: 'There was an issue with that action. Please try again.' });
        });
});

actionsRoute.post('/', (req, res) => {
    actions
        .addOne(req.body)
        .then(id => {
            res.status(200).json({ msg: `Successfully created the action at ${id}.` });
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

actionsRoute.put('/:id', (req, res) => {
    const { id } = req.params;
    actions
     .update(id, req.body)
     .then(success => {
         res.status(200).json({ msg: `Successfully updated action ${id}. `});
     })
     .catch(err => {
         res.status(500).json({ msg: `There was an issue with updated the action ${id}. Please try again.` });
     });
});

actionsRoute.delete('/:id', (req, res) => {
    const { id } = req.params;
    actions
        .nuke(id)
        .then(success => {
            res.status(200).json({ msg: `The action ${id} was successfully deleted.` });
        })
        .catch(err => {
            res.status(500).json({ msg: `There was an issue trying to delete the action ${id}. Please Try again.`});
        });
});

module.exports = actionsRoute;
