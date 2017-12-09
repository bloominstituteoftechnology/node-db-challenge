const express = require('express');

const projectsRouter = express.Router();

const db = require('../configuration/db.js');

projectsRouter.get('/', function(req, res) {
	// /api/projects/
	db('projects')
		.then(function(records) {
			res.status(200).json(records);
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not retrieve the projects' });
		});
});

projectsRouter.get('/:id', function(req, res) {
	// /api/projects/:id
	const { id } = req.params;

	db('projects')
		.where('id', id)
		.then(function(records) {
			res.status(200).json(records);
		})
		.catch(err => {
			res.status(500).json({
				error:
					'Could not retrieve project by ID. Does project ID exist?'
			});
		});
});

projectsRouter.post('/', function(req, res) {
	const project = req.body;

	db
		.insert(project)
		.into('projects')
		.then(function(records) {
			res.status(200).json({ success: `${records} added!` });
		})
		.catch(function(err) {
			res.status(500).json({ err });
		});
});

projectsRouter.delete('/:id', function(req, res) {
	const { id } = req.params;

	db('projects')
		.where('id', id)
		.del()
		.then(function() {
			res.status(200).json({ success: `project with id ${id} removed` });
		})
		.catch(function(err) {
			res.status(500).json({ fail: err });
		});
});

module.exports = projectsRouter;
