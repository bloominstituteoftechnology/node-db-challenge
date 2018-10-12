const express = require('express');
const actionDb = require('./actionModel');
const router = express.Router();

router.get('/', (req, res) => {
    actionDb.get().then(actions => {
        res.status(200).json(actions);
    })
        .catch(err => res.status(500).json(err));
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    actionDb.getById(id).then(action => {
        if(!action) res.status(404).json({message: 'Action not found'});
        res.status(200).json(action);

    }).catch(err => res.status(500).json(err.message));
});

router.post('/', (req, res) => {
    // grab data from body
    const newAction = req.body;

    //save to database
    actionDb.add(newAction).then(ids => {
        res.status(201).json(ids);
    }).catch( err => {
        res.status(500).json(err.message);
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    actionDb.update(id, changes).then(count => {
        if(!count || count < 1) return res.status(404).send({message: 'No actions found to udpate'});
        res.status(200).json(count);
    }).catch(err => res.status(500).json(err.message));
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    actionDb.remove(id).then(count => {
        if(!count || count < 1) return res.status(404).send({message: 'No actions found to remove'});
        res.status(200).json(count);
    }).catch(err => res.status(500).json(err.message));
});

module.exports = router;