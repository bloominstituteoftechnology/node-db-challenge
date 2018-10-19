const express = require('express');
const helmet = require('helmet');

const knex = require('knex');

const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

// Check make sure server is up
server.get('/', (req, res) => {
	res.send('Server works - yay!!');
});

// GET projects

server.get('/api/projects', (req, res) => {
	db('projects')
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// POST for adding projects

server.post('/api/projects', (req, res) => {
	// Grab data from body
	const project = req.body;
	db.insert(project)
		.into('projects')
		.then((ids) => {
			res.status(201).json(ids);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// GET projects by id that also returns the action for that project
server.get('/api/projects/:id', (req, res) => {
	const { id } = req.params;
	db('projects')
		.where({ id })
		.first()
		.then((project) => {
			if (project) {
				db('actions')
					.where({ project_id: id })
					.then((actions) => {
						project.actions = actions;
						res.status(200).json(project);
					})
					.catch((err) => {
						res.status(500).json(err);
					});
			} else {
				res.status(404).json({ message: 'Project not found' });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// UPDATE projects
server.put('/api/projects/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	db('projects')
		.where({ id })
		.update(changes)
		.then((change) => {
			res.status(200).json(change);
		})
		.catch((err) => res.status(500).json(err));
});

// DELETE projects
server.delete('/api/projects/:id', (req, res) => {
	const { id } = req.params;

	db('zoos')
		.where({ id })
		.del()
		.then((count) => {
			res.status(200).json(count);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// GET project by ID with Actions
server.get('/api/projects/:id/actions', (req, res) => {
	const { id } = req.params;
	db('actions')
		.where({ project_id: id })
		.then((actions) => {
			if (actions) {
				res.status(200).json(actions);
			} else {
				res
					.status(404)
					.json({ error: `Actions with id of ${id} could not be found ` });
			}
		})
		.catch((err) => res.status(500).json({ error: 'Could not retrieve data' }));
});

// GET actions

server.get('/api/actions', (req, res) => {
	db('actions')
		.then((action) => {
			res.status(200).json(action);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// POST for adding actions

server.post('/api/actions', (req, res) => {
	// Grab data from body
	const action = req.body;
	db.insert(action)
		.into('actions')
		.then((ids) => {
			res.status(201).json(ids);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// UPDATE actions
server.put('/api/actions/:id', (req, res) => {
	const { id } = req.params;
	const updateActions = req.body;
	db('actions')
		.where({ id })
		.update(updateActions)
		.then((update) => {
			res.status(200).json(update);
		})
		.catch((err) => res.status(500).json(err));
});

//DELETE actions
server.delete('/api/actions/:id', (req, res) => {
	const { id } = req.params;

	db('actions')
		.where({ id })
		.del()
		.then((count) => {
			res.status(200).json(count);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

const port = 9000;
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));
