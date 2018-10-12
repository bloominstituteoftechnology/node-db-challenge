const express = require('express');
const projectDb = require('./projectModel.js');
const router = express.Router();

router.get('/', (req, res) => {
    projectDb.getProjects().then(projects => {
        res.status(200).json(projects);
    })
        .catch(err => res.status(500).json(err));
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    projectDb.getProject(id).then(project => {
        if(!project) res.status(404).json({message: 'Project not found'});

        projectDb.getAction(project.id).then(action => {
            if(!action) res.status(404).json({message: 'Action not found'});
            let proj = project;
            proj.actions = action;

            res.status(200).json(proj);
        }).catch(err => res.status(500).json(err.message));

    }).catch(err => res.status(500).json(err.message));
});

router.post('/', (req, res) => {
    // grab data from body
    const newProject = req.body;

    //save to database
    projectDb.addProject(newProject).then(ids => {
        res.status(201).json(ids);
    }).catch( err => {
        res.status(500).json(err.message);
    });
});

module.exports = router;