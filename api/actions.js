const express = require('express'),
    router = express.Router(),
    db = require('../data/helpers/actionModel.js');
Projects = require('../data/helpers/projectModel.js');

router
    .post('/create', async function (req, res) {
        const { project_id, description, notes } = req.body;

        let project;
        try {
            project = await Projects.get(project_id);
        } catch (err) {
            res.status(500).json({ errorMessage: "There was an issue retrieving the projects. Project could not be found. project_id must be from an existing project." });
        }

        if (!project) {
            return;
        }

        if (!project_id || !description || !notes) return res.status(400).json({ errorMessage: "Please provide a project_id, description, and notes for the action." });

        db.insert(req.body).then(actions => res.status(201).json(actions)).catch(err => res.status(500).json({
            error: "There was an error while saving the action to the database",
            info: { err }
        }));
    })

    .get('/get', function (req, res) {
        db.get().then(actions => res.json(actions)).catch(err => res.status(500).json({ error: "The actions information could not be retrieved." }));
    })

    .get('/get/:id', function (req, res) {
        db.get(req.params.id).then(action => {
            if (!action) return res.status(404).json({ message: "The action with the specified ID does not exist." });
            res.json(actions);
        }).catch(err => res.status(500).json({ error: "The action information could not be retrieved." }));
    })

    .delete('/delete/:id', function (req, res) {
        db.remove(req.params.id).then(action => {
            if (!action) return res.status(404).json({ message: "The action with the specified ID does not exist." });
            res.json(action);
        }).catch(err => res.status(500).json({ error: "The action could not be removed" }));
    })

    .put('/update/:id', function (req, res) {
        const { project_id, description, notes } = req.body;

        if (!project_id || !description || !notes) return res.status(400).json({ errorMessage: "Please provide a project_id, description, and notes for the action." });

        db.update(req.params.id, req.body).then(action => {
            if (!action) return res.status(404).json({ message: "The action with the specified ID does not exist." });
            res.json(action);
        }).catch(err => res.status(500).json({ error: "The action information could not be modified." }));
    });

module.exports = router;