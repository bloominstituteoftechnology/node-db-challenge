const express = require('express');
const server = express();
const knex = require('knex');

const dbConfig = require('./knexfile.js');
const db = knex(dbConfig.development);

const PORT = 3500;

server.use(express.json());

// get project


// get project by id

// post project
server.post('/projects', (req, res) => {
	const newProject = req.body;
	db('projects')
		.insert(newProject)
		.then(id => {
			res.json({ message: `New project created with id ${id}` });
		})
		.catch(err => {
			console.log(err.Error);
			if (newProject.name && err.code === "SQLITE_CONSTRAINT") {
				res.status(400).json({ message: 'Please enter unique project name' });
			} else if (err.code === 'SQLITE_CONSTRAINT') {
				res.status(400).json({ message: 'Project name is required' });
			} else {
				res.status(500).json({ message: 'Could not create project' });
			}
		});
});

// post action
server.post('/projects/actions', (req, res) => {
	const newAction = req.body;
	db('actions')
		.insert(newAction)
		.then(id => {
			res.json({ message: `New action created with id ${id}` });
		})
		.catch(err => {
			console.log(err.Error);
			if (err.code === 'SQLITE_CONSTRAINT') {
				res.status(400).json({ message: 'Action description and project id are required' });
			} else {
				res.status(500).json({ message: 'Could not create action' });
			}
		});
});

// Server Listening
server.listen(PORT, () => {
	console.log(`Server Listening on: ${PORT}`)
});