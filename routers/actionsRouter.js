const actionsDB = require('../data/helpers/actionDB');
const projectsDB = require('../data/helpers/projectDB');

const express = require('express');
const router = express.Router();

//beginning of /api/actions endpoints

//POST /api/actions
router.post('/', (req, res) => {
    const action = req.body;
    db('actions').insert(action)
        .then(id => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to insert action' });
        });
});

//GET /api/actions
router.get('/', (req, res) => {
    db('actions')
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to find actions' });
        });
});

//GET BY ID /api/actions/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('actions').where('id', id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to find action with that id.' });
        });
});

//PUT /api/actions/:id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const action = req.body;
    db('actions').where('id',id).update(action)
        .then(action => {
            res.json(action)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to update action.' });
        });
});

//DELETE /api/projects/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('actions').where('id', id).del()
        .then(action => {
            res.json(action);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to delete action.' });
        });
});

//end of /api/actions endpoints
module.exports = router;