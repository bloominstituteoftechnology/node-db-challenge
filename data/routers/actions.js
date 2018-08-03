const express = require('express');
const server = express();
// const db = require('../db');
const actions = require('../helpers/actionHelpers');


const router = express.Router();

const errorHandler = (status, message, res) => {
    res.status(status).json({ error: message });
    return;
};

//Action Endpoints

//List of actions

router.get('/', (req, res) => {
    actions
    .get()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        errorHandler(500, "The action information could not be retrieved.", res);
    });
});

//Get by ID

router.get('/:id', (req, res) => {
    const id = req.params;
    if(!id) {
        res.status(404);
        res.json({ error: "That action ID does not exist" })
        } else {
    actions
    .get(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error=> {
        errorHandler(500, "The action information could not be retrieved.", res);
    });
}
});

//Insert Action

router.post('/', (req, res) => {
    const { project_id, description, notes } = req.body;
    actions
    .insert({ project_id, description, notes })
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error=> {
        errorHandler(500, "The action could not be added", res);

    });
});

//Update Action

router.put('/:id', (req, res) => {
    const id = req.params;
    const action = req.body;

    if(!id) {
        res.status(404);
        res.json({ error: "The action with the specified ID does not exist." })
    }
    actions
    .update(id, action)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error=> {
        errorHandler(500, "The action information could not be updated.", res);
    });
});

//Delete Action

router.delete('/:id', (req, res) => {
    const id = req.params;
    if(!id) {
        res.status(404)
        res.json({ error: "The action with the specified ID does not exist." })
        }
    actions
    .remove(id)
    .then(response => {
        res.status(200).json(response)
                })
            .catch(error => {
                errorHandler(500, "The action information could not be removed.", res);
            });
});

module.exports = router;