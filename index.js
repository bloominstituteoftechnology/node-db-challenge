const express = require('express');
const helmet = require('helmet');

const helper = require('./data/helper');

const app = express();

app.use(helmet());

app.get('/projects', async (req, res) => {
	try {
		const projects = await helper.getProjects();
		res.status(200).json(projects)
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.get('/projects/:id', async (req, res) => {
	const { id } = req.params
	try {
		const project = await helper.getProject(id);
		res.status(200).json(project)
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.get('/actions', async (req, res) => {
	try {
		const actions = await helper.getActions();
		res.status(200).json(actions)
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.get('/actions/:id', async (req, res) => {
	const { id } = req.params
	try {
		const action = await helper.getAction(id);
		res.status(200).json(action)
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.listen(9000, () => {
	console.log('Server running on port 9000')
})