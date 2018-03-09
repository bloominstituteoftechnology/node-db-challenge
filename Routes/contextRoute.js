const express = require('express');
const knex = require('../database/db');
const contexts = require('../controls/contextControl');

const contextRoute = express.Router();

contextRoute.get('/', (req, res) => {
    return contexts.getAll
        .then(contexts => {
            if (contexts.length) {
                res.status(200).json(contexts);
            } else {
                res.status(404).json({ msg: 'Could not find any contexts.' });
            }
        })
        .catch(err => {
            res.status(500).json({ msg: 'There was an error finding the specified context. Was there a typo?' });
        });
});

contextRoute.post('/', (req, res) => {
    contexts
        .addOne(req.body)
        .then(id => {
            res.status(200).json({ success: `An action was created with the id: ${id}.` });
        })
        .catch(err => {
            res.status(500).json({ msg: 'There was an issue creating your request. Please try again.' });
        });
});

contextRoute.put('/:id', (req,res) => {
    const { id } = req.params;
    contexts
        .update(id, req.body)
        .then(success => {
            res.status(200).json({ msg: `The action ${id} was successfully updated.` });
        })
        .catch(err => {
            res.status(500).json({ msg: 'There was a problem trying to update. Please try again.' });
        });
});

contextRoute.delete('/:id', (req, res) => {
    const { id } = req.params;
    contexts
        .nuke(id)
        .then(success => {
            res.status(200).json({ msg: 'The action was deleted.' });
        })
        .catch(err => {
            res.status(500).json({ msg: 'There was an error trying to delete the action. Please try again.' });
        });
});

module.exports = contextRoute;
