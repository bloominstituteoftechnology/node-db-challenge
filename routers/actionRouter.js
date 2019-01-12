const express = require('express');
const router = express.Router();
const actionDb = require('../data/helpers/actionModel');

router.get('/', (req, res) => {
    actionDb.get()
        .then((actions) => {
            res.json(actions);
        })
        .catch((err) => {
            res.status(500).json({error: "Actions could not be retrieved."});
        });
});

router.get('/:id', (req, res) => {
    actionDb.get(req.params.id)
        .then((action) => {
            res.json(action);
        })
        .catch((err) => {
            res.status(500).json({error: "Action could not be retrieved."});
        });
});

router.post('/', (req, res) => {
    const action = req.body;
    if (action.description && action.notes && action.project_id) {
        actionDb.insert(action)
            .then((action) => {
                res.status(201).json(action);
            })
            .catch((err) => {
                res.status(500).json({error: "Unable to create action."});
            });
    } else {
        res.status(400).json({errorMessage: "Please provide 'description', 'notes', and 'project_id' for the action."});
    }
});

router.delete('/:id', (req, res) => {
    actionDb.remove(req.params.id)
    .then(count => {
        if (count) {
            res.json({message: "Successfully deleted the action."})
        } else {
            res.status(404).json({message: "The action does not exist."})
        }
    })
    .catch(err => {
        res.status(500).json({error: "The action could not be deleted."});
    })
});

router.put('/:id', (req, res) => {
    const action = req.body;
    if (action.description && action.notes && action.project_id) {
        actionDb.update(req.params.id, action)
            .then(action => {
                if (action) {
                    res.json(action);
                } else {
                    res.status(404).json({message: "The action does not exist."});
                }
            })
            .catch(err => {
                res.status(500).json({error: "The action could not be modified."});
            });
    } else {
        res.status(400).json({errorMessage: "Please provide 'description', 'notes', and 'project_id' for the action."});
    }
});

module.exports = router;