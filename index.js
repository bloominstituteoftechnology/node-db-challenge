const express = require('express');
const helmet = require('helmet');

const helper = require('./data/helper');

const app = express();

app.use(helmet());
app.use(express.json())

//Projects CRUD

app.get('/projects', async (req, res) => {
	try {
		const projects = await helper.getProjects();
		res.status(200).json(projects)
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.post('/projects', async (req, res) => {
	const project = req.body;
	try {
		const id = await helper.addProject(project);
		res.status(200).json(id)
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.get('/projects/:id', async (req, res) => {
	const { id } = req.params
	try {
		const project = await helper.getProject(id);
		project.length > 0
		? res.status(200).json(project)
		: res.status(404).json({ error: 'The specified project could not be found.' })
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.put('/projects/:id', async (req, res) => {
	const { id } = req.params;
	const project = req.body;
	try {
		const count = await helper.updateProject(id, project);
		count > 0
		? res.status(200).json(count)
		: res.status(404).json({ error: 'Could not find the specified project.' });
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.delete('/projects/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const count = await helper.deleteProject(id);
		count > 0
		? res.status(200).json(count)
		: res.status(404).json({ error: 'Could not find the specified project.' });
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

// Actions CRUD

app.get('/actions', async (req, res) => {
	try {
		const actions = await helper.getActions();
		res.status(200).json(actions)
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.post('/actions', async (req, res) => {
	const action = req.body;
	try {
		const id = await helper.addAction(action);
		res.status(200).json(id)
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.get('/actions/:id', async (req, res) => {
	const { id } = req.params
	try {
		const action = await helper.getAction(id);
		action.length > 0
		? res.status(200).json(action)
		: res.status(404).json({ error: 'The specified action could not be found.' })
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.put('/actions/:id', async (req, res) => {
	const { id } = req.params;
	const action = req.body;
	try {
		const count = await helper.updateAction(id, action);
		count > 0
		? res.status(200).json(count)
		: res.status(404).json({ error: 'Could not find the specified action.' });
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.delete('/actions/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const count = await helper.deleteAction(id);
		count > 0
		? res.status(200).json(count)
		: res.status(404).json({ error: 'Could not find the specified project.' });
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.listen(9000, () => {
	console.log('Server running on port 9000')
})