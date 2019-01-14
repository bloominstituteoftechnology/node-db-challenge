const express = require('express'),
    router = express.Router(),
    db = require('../data/helpers/projectModel.js');

router
    .post('/create', function (req, res) {
        const {name, description} = req.body;

        if (!name || !description) return res.status(400).json({errorMessage: "Please provide name and description for the project."});

        db.insert(req.body).then(projects => res.status(201).json(projects)).catch(err => res.status(500).json({error: "There was an error while saving the project to the database"}))
    })

    .get('/get', function (req, res) {
        db.get().then(projects => res.json(projects)).catch(err => res.status(500).json({error: "The projects information could not be retrieved."}))
    })

    .get('/get/:id', function (req, res) {
        db.get(req.params.id).then(project => {
            if (!project) return res.status(404).json({message: "The project with the specified ID does not exist."});
            res.json(projects)
        }).catch(err => res.status(500).json({error: "The project information could not be retrieved."}))
    })

    .delete('/delete/:id', function (req, res) {
        db.remove(req.params.id).then(project => {
            if (!project) return res.status(404).json({message: "The project with the specified ID does not exist."});
            res.json(project)
        }).catch(err => res.status(500).json({error: "The project could not be removed"}))
    })

    .put('/update/:id', function (req, res) {
        const {name, description} = req.body;

        if (!name || !description) return res.status(400).json({errorMessage: "Please provide name and description for the project."});

        db.update(req.params.id, req.body).then(project => {
            if (!project) return res.status(404).json({message: "The project with the specified ID does not exist."});
            res.json(project)
        }).catch(err => res.status(500).json({error: "The project information could not be modified."}))
    });

module.exports = router;