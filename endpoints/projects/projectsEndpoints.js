const express = require('express');
const knex = require('../../db.js');
const projects = express.Router();

projects.get('/', function(req, res) {
	knex('projects')
		.then(function(projects) {
			res.status(200).json(projects);
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not retrieve the projects' });
		});
});

projects.get('/:id', function(req, res) {
	const { id } = req.params;

	knex('projects')
		.join('actions', 'actions.projectId', 'projects.id')
		.select('projects.*', 'actions.description', 'actions.notes')
		.where('projects.id', id)
		.then(function(project) {
			if (project) {
				res.status(200).json(project);
			} else {
				res.status(404).json(null);
			}
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not retrieve the project' });
		});
});

projects.post('/', function(req, res) {
	const { project } = req.body;

	knex
		.insert(project)
		.into('projects')
		.then(function(ids) {
			res.status(200).json(ids);
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not create the projects' });
		});
});

projects.get('/:id/actions', function(req, res) {
	const { id } = req.params;

	knex('actions')
		.where('projectId', id)
		.then(function(actions) {
			res.status(200).json(actions);
		})
		.catch(function(error) {
			res.status(500).json({ error });
		});
});

module.exports = projects;
