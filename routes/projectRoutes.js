const express = require('express');
const projectDb = require('./projectModel.js');
const actionDb = require('./actionModel');
const router = express.Router();

router.get('/', (req, res) => {
    projectDb.get().then(projects => {
        res.status(200).json(projects);
    })
        .catch(err => res.status(500).json(err));
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    projectDb.getById(id).then(project => {
        if(!project) res.status(404).json({message: 'Project not found'});

        actionDb.getById(project.id).then(action => {
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
    projectDb.add(newProject).then(ids => {
        res.status(201).json(ids);
    }).catch( err => {
        res.status(500).json(err.message);
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    projectDb.update(id, changes).then(count => {
        if(!count || count < 1) return res.status(404).send({message: 'No projects found to udpate'});
        res.status(200).json(count);
    }).catch(err => res.status(500).json(err.message));
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    projectDb.remove(id).then(count => {
        if(!count || count < 1) return res.status(404).send({message: 'No Projects found to remove'});
        res.status(200).json(count);
    }).catch(err => res.status(500).json(err.message));
});

module.exports = router;