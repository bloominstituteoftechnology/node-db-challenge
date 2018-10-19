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

server.get('/api/projects/:id', (req, res) => {
	const { id } = req.params;
	db.select('*')
		.from('projects')
		.join('actions', function() {
			this.on('actions.project_id', '=', 'projecst.id');
		})
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// GET project by ID with Actions
db.select('*')
	.from('projects')
	.join('actions', function() {
		this.on('actions.project_id', '=', 'projecst.id');
	});
server.get('/api/projects/:id/actions', (req, res) => {
	const { id } = req.params;
	db('actions')
		.where({ id })
		.then((ids) => {
			if (ids) {
				res.status(200).json(ids);
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
	db('projects')
		.then((project) => {
			res.status(200).json(project);
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

const port = 9000;
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));
