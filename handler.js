// express
const express = require('express');

// bring in knex helpers
const modelHelpers = require('./helpers.js');

// this enables modularity
// instead of having to use the same server, we can place it in the Router()
const router = express.Router();

// GET
router.get('/', (req, res) => {
    modelHelpers
        .getProjects()
            .then(projects => {
                res.status(200).json(projects)
            })
            .catch(err => res.status(500).json(err));
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    modelHelpers
        .getProjectsById(id)
            .then(project => {
                (project) ?
                    res.status(200).json(project) :
                    res.status(404).json({ error: `ID ${id} not found`});
            })
            .catch(err => res.status(500).json(err));
})

router.get('/actions', (req, res) => {
    modelHelpers
        .getActions()
            .then(actions => {
                res.status(200).json(actions)
            })
            .catch(err => res.status(500).json(err));
    
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    modelHelpers
        .getActionsById(id)
            .then(action => {
                (action) ?
                    res.status(200).json(action) :
                    res.status(404).json({ error: `ID ${id} not found`});
            })
            .catch(err => res.status(500).json(err));
})

// POST

router.post('/', (req, res) => {
    const newProject = req.body;
    modelHelpers
        .postProject(newProject)
            .then(projectId => {
                res.status(200).json(id);
            })
            .catch(err => res.status(500).json);
})

router.post('/actions', (req, res) => {
    const newAction = req.body;
    modelHelpers
        .postAction(newAction)
            .then(actionId => {
                res.status(200).json(id);
            })
            .catch(err => res.status(500).json);
})

module.exports = router;