const express = require('express');
const { projectDb } = require('../data/models/index.js');

const router = express.Router();

// get all projects
router.get('/', (req, res) => {
	projectDb
		.getAllProjects()
		.then(projects => {
			if (!projects.length) {
				return res.status(200).json({ message: 'There are no projects in the database. You should add one.' });
			}
			return res.status(200).json(projects);
		})
		.catch(err => res.status(500).json({ error: `Server failed to GET all projects: ${ err }` }));
});

// get a project with a given ID and its associated actions
router.get('/:id', (req, res) => {
	const { id } = req.params;
	projectDb
		.getProject(id)
		.then(project => {
			if (project === 'noProjectId') {
				return res.status(404).json({ error: `Project with ID ${ id } does not exist.` });
			}
			return res.status(200).json(project);
		})
		.catch(err => res.status(500).json({ error: `Server failed to GET project with ID ${ id }: ${ err }`}));
});

// add a new project to the database
router.post('/', (req, res) => {
	const newProject = req.body;
	if (!newProject.name) {
		return res.status(401).json({ error: 'Name of new project cannot be empty.' });
	}
	if (!newProject.description) {
		return res.status(401).json({ error: 'Description of new project cannot be empty.' });
	}
	if (newProject.completed === undefined || newProject.completed === '') {
		newProject.completed = false; // default value
	}
	if (newProject.completed !== true && newProject.completed !== false) {
		return res.status(401).json({ error: `Completed flag of new project cannot be ${ newProject.completed }. It must be either true or false.` });
	}
	projectDb
		.addProject(newProject)
		.then(id => res.status(201).json(id.id[0]))
		.catch(err => res.status(500).json({ error: `Server failed to POST new project: ${ err }`}));
});

// update a project
router.put('/:id', (req, res) => {
	const { id } = req.params;
	const updatedProject = req.body;
	projectDb
		.updateProject(id, updatedProject)
		.then(updateBool => {
			if (updateBool) {
				return res.status(200).json({ message: `Project with ID ${ id } updated successfully.` });
			}
			return res.status(404).json({ error: `Project with ID ${ id } does not exist.` });
		})
		.catch(err => res.status(500).json({ error: `Server failed to PUT updated project: ${ err }` }));
});

module.exports = router;
