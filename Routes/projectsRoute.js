const express = require('express');
const knex = require('../database/db');
const projects = require ('../controls/projectsController');

const projectsRoute = express.Router();

projectsRoute.get('/', (req, res) => {
    projects.getAll().then(projects => {
        if (projects.length) {
            res.status(200).json(projects);
        } else {
            res.status(500).json({ msg: 'There was an error trying to find projects. Have you started your project list yet?' });
        }
    });
});

projectsRoute.get('/:id', (req, res) => {
    const { id } = req.params;
    projects
        .getOne(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ msg: 'There was an issue finding the requested id. Please check for typos and try again.' });
        });
});

projectsRoute.post('/', (req, res) => {
    projects
        .addOne(req.body)
        .then(id => {
            res.status(200).json({ success: `Your project was created at: ${id}.` });
        })
        .catch(err => {
            res.status(500).json({ msg: 'There was an error creating your project. Please try again.' });
        });
});

projectsRoute.put('/:id', (req, res) => {
    const { id } = req.params;
    projects
        .update(id, req.body)
        .then(success => {
            res.status(200).json({ msg: `The project: ${id} was successfully updated.` });
        })
        .catch(err => {
            res.status(500).json({ msg: 'There was an error updating your project. Please try again.' });
        });
});

projectsRoute.delete(':/id', (req, res) => {
    const { id } = req.params;
    projects
        .nuke(id)
        .then(success => {
            res.status(200).json({ msg: 'The project was deleted successfully.' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: 'There was an error deleting this project. Please try again.' });
        });
});

module.exports = projectsRoute;
