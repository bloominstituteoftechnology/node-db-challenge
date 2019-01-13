const actionsDB = require('../data/helpers/actionDB');
const projectsDB = require('../data/helpers/projectDB');

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const action = req.body;
    actionsDB.insert(action).then(actionId => {
        actionsDB.get(actionId.id)
            .then(action => {
                res.status(201).json(action);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to insert project.  Please make sure there is a project_name a project_description and a project_completed' });
        });
    });
});

router.get('/', (req, res) => {
    actionsDB.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to find actions' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    actionsDB.get(id)
        .then(id => {
            res.status(200).json(id);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to find action with that id.' });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const action = req.body;
        actionsDB.update(id, action)
.then(id => {
            res.status(200).json(id)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to update action.' });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    actionsDB.remove(id)
        .then(action => {
            res.json(action);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to delete action.' });
        });
});

module.exports = router;