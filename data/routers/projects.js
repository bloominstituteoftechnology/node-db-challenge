// intialize route
const express = require('express');
const router = express.Router();
const db = require('../models/projectModel');
const actionDb = require('../models/actionsModel');

// add middleware
const numberIdCheck = require('../middleware/numberIdCheck');

// CRUD logic

// Create/Post logic
router.post('/', (req, res) => {
    const project = req.body;
    const projectName = req.body.project_name
    if (projectName) {
        db
            .insert(project)
            .then(newProject => {
                    res
                    .status(201)
                    .json(newProject)
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ err: 'Failed to insert project!'})
            });
    } else if (!projectName) {
        res
            .status(400)
            .json({ err: 'Bad request [no name field]'})
    } else {
        res
            .status(500)
            .json({ err: 'Failed to add project'})
    }
})  

// Read/get logic
router.get('/', (req, res) => {
    db
        .find()
        .then(projects => {
            res
            .status(200)
            .json(projects);
        })
        .catch(err => {
            res
                .status(500)
                .json({ err: 'Could not retrieve projects from database' });
        });
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (numberIdCheck(id)) {
        db
        .findById(id)
        .then(project => {
            if (project) {
                const projectId = project.id;
                async function getActionsReturnProject () {
                    let actions = await actionDb.findByProjectId(projectId);
                    project.actions = actions;
                    res
                    .status(200)
                    .json(project)
                    }
                getActionsReturnProject();
            } else if (!project) {
                res
                .status(404)
                .json({ err: 'Could not find project with specified ID from database' });
            }
        })
        .catch(err => {
            res
                .status(500)
                .json({ err: 'Could not retrieve projects from database' });
        });
    } else if (!numberIdCheck(id)) {
        res
            .status(400)
            .json({ err: 'Could not retrieve project from database (ID is not valid)'});
    }
})

module.exports = router;
