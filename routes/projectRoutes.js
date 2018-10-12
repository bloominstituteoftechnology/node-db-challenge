const express = require('express');
const { projectDb } = require('../data/models/index.js');

const router = express.Router();

router.post('/', (req, res) => {
	const newProject = req.body;
	if (!newProject.name) {
		return res.status(401).json({ error: 'Name of new project cannot be empty.' });
	}
	if (!newProject.description) {
		return res.status(401).json({ error: 'Description of new project cannot be empty.' });
	}
	if (newProject.completed === undefined) newProject.completed = 0; // default value
	projectDb
		.addProject(newProject)
		.then(id => res.status(201).json(id.id[0]))
		.catch(err => res.status(500).json({ error: `Server failed to POST new project: ${ err }`}));
});

module.exports = router;
