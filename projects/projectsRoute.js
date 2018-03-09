const express = require('express');
const knex = require('../database/db');
const projects = require ('./projectsController');

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

module.exports = projectsRoute;
