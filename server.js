// DEPENDENCIES
const express = require('express');
const helmet = require('helmet');

// DATA HELPERS
const projectModel = require('./projects/projectModel.js');
// const actionModel = require('./actions/actionModel.js');

// SERVER
const server = express();

// MIDDLEWARE
server.use(express.json());
server.use(helmet());

// ENDPOINTS

//get projects
server.get('/api/projects/', (req, res) => {
	projectModel
		.getProjects()
		.then(projects => {
			res.status(200).json(projects);
		})
		.catch(err => res.status(500).json(err));
});

// get project by id
server.get('/api/projects/:id', (req, res) => {
	projectModel
		.getProject(req.params.id)
		.then(project => {
			if (project) {
				console.log(project);
				res.status(200).json(project);
			} else {
				res.status(404).json({ error: 'No project by that id' });
			}
		})
		.catch(err => res.status(500).json({ error: err }));
});

// add project
server.post('/api/projects/', (req, res) => {
	const project = req.body;

	projectModel
		.addProject(project)
		.then(id => {
			res.status(201).json(id);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// add action
server.post('/api/projects/:id/actions', (req, res) => {
	const action = req.body;

	projectModel
		.addAction(action)
		.then(id => {
			res.status(201).json(id);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// PORT
const port = 5000;
server.listen(port, function() {
	console.log(`\n=== LISTENING ON http://localhost:${port} ===\n`);
});
