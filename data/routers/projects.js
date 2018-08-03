const express = require('express');
const server = express();

const projects = require('../helpers/projectHelpers');

const router = express.Router();

const errorHandler = (status, message, res) => {
    res.status(status).json({ error: message });
    return;
};

// Project Endpoints

// GET 
router.get('/', (req, res) => {
    projects
    .get()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        errorHandler(500, "The project information could not be retrieved.", res);
    });
});

// GET by ID
router.get('/:id', (req, res) => {
    const id = req.params;
    if(!id) {
        res.status(404);
        res.json({ error: "That project ID does not exist" })
        } else {
    projects
    .get(id)
    .then(project => {
        res.json({ project })
    })
    .catch(error=> {
        errorHandler(500, "The project information could not be retrieved.", res);
    });
}
});

// POST (POSTMAN: not okay)
/* router.post('/', (req, res) => {
    const { name, description } = req.body;
    projects
    .insert({ name, description })
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({error: 'The project could not be created'})
    });
});*/

// PUT 
router.put('/:id', (req, res) => {
    const id = req.params;
    const project = req.body;
     projects
    .update(id, project)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error=> {
        errorHandler(500, "The project information could not be updated.", res);
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    const id = req.params;
    if(!id) {
        res.status(404)
        res.json({ error: "The project with the specified ID does not exist." })
        }
    projects
    .remove(id)
    .then(response => {
        res.status(200).json(response)
                })
    .catch(error => {
        errorHandler(500, "The project information could not be removed.", res);
    });
});


module.exports = router;