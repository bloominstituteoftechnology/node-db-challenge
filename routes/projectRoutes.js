const express = require('express');
const projectDb = require('./projectModel.js');
const actionDb = require('./actionModel');
const router = express.Router();

// Route to return all projects
router.get('/', (req, res) => {
    // Return all the projects from the 'projects' database
    projectDb.get().then(projects => {
        res.status(200).json(projects);
    })
        .catch(err => res.status(500).json(err));
});

// Route to return requested project
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    // Return the requested project
    projectDb.getById(id).then(project => {
        if(!project) res.status(404).json({message: 'Project not found'});

        // Return the action for the requested project
        actionDb.getById(project.id).then(action => {
            // If no action return error
            if(!action) return res.status(404).json({message: 'Action not found'});

            // Setup new object with the base of 'project' and set actions into the new object
            let proj = project;
            proj.actions = action;

            res.status(200).json(proj);
        }).catch(err => res.status(500).json(err.message));

    }).catch(err => res.status(500).json(err.message));
});

// Route to add a new project
router.post('/', (req, res) => {
    const newProject = req.body;

    // Add a new project to the database and return the project number
    projectDb.add(newProject).then(ids => {
        res.status(201).json(ids);
    }).catch( err => {
        res.status(500).json(err.message);
    });
});

// Route to update an existing project
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    // Update an existing project in the database and return the project's ID
    projectDb.update(id, changes).then(count => {
        if(!count || count < 1) return res.status(404).send({message: 'No projects found to udpate'});
        res.status(200).json(count);
    }).catch(err => res.status(500).json(err.message));
});

// Route to delete an existing project
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    // Remove an existing project in the database and return 1 or 0 (true or false)
    projectDb.remove(id).then(count => {
        if(!count || count < 1) return res.status(404).send({message: 'No Projects found to remove'});
        res.status(200).json(count);
    }).catch(err => res.status(500).json(err.message));
});

module.exports = router;