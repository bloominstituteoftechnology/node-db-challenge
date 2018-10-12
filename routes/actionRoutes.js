const express = require('express');
const actionDb = require('./actionModel');
const router = express.Router();

// Route to return all actions
router.get('/', (req, res) => {
    // Return all the actions from every project
    actionDb.get().then(actions => {
        res.status(200).json(actions);
    })
        .catch(err => res.status(500).json(err));
});

// Route to return requested action
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    // Return a specified action
    actionDb.getById(id).then(action => {
        if(!action) res.status(404).json({message: 'Action not found'});
        res.status(200).json(action);

    }).catch(err => res.status(500).json(err.message));
});

// Route to post a new action
router.post('/', (req, res) => {
    const newAction = req.body;

    // Add a new action to the database and return the action's ID
    actionDb.add(newAction).then(ids => {
        res.status(201).json(ids);
    }).catch( err => {
        res.status(500).json(err.message);
    });
});

// Route to udpate an existing action
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    // Update an existing action and return the action's ID
    actionDb.update(id, changes).then(count => {
        // If action does not exist, return a custom error message
        if(!count || count < 1) return res.status(404).send({message: 'No actions found to udpate'});
        res.status(200).json(count);
    }).catch(err => res.status(500).json(err.message));
});

// Route to delete an existing action
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    // Remove an existing action in the database and return 1 or 0 (true or false)
    actionDb.remove(id).then(count => {
        // If no action found, return a custom error message
        if(!count || count < 1) return res.status(404).send({message: 'No actions found to remove'});
        res.status(200).json(count);
    }).catch(err => res.status(500).json(err.message));
});

module.exports = router;