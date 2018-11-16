const express = require('express');
const knex = require('knex'); // import knex because it's awesome
const morgan = require('morgan');
const knexConfig = require('./knexfile'); // import knexfile object
const db = knex(knexConfig.development); // import knecConfig developement object to get db directory
const server = express();
server.use(express.json());
server.use(morgan('short')); // import morgana for logger messages in terminal

// create a project
server.post('/api/projects', (req, res) => {
	const project = req.body;
	db('projects')
		.insert(project)
		.returning('id')
		.then((id) => {
			res.status(201).json(id);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error creating that project' });
		});
}); //localhost:9000/api/projects => takes name: string, description: string, completed: boolean

// create an action
server.post('/api/actions/', (req, res) => {
	const action = req.body;
	db('action')
		.insert(action)
		.returning('id')
		.then((ids) => {
			res.status(201).json(ids);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error creating that action', err });
		});
}); //localhost:9000/api/actions => takes description: string, notes: string, completed: boolean, project_id: integer

server.get('/api/projects/:id', (req, res) => {
	const { id } = req.params; // grab the id
	db('projects') // grab database for projects
		.where({ id }) // WHERE id = projects.id
		.first() // set column to be inserted on the first position
		.then((projects) => {
			if (projects) {
				// if the project exists
				db('action') // grab database for action
					.where({ project_id: id }) // match the FK to the id
					.then((actions) => {
						projects.actions = actions;
						res.status(200).json(projects);
					})
					.catch((err) => res.status(500).json({ message: 'There was an error on the servers side', err })); //
			} else {
				res.status(404).json({ message: 'User not found' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'There was an error on the servers side', err });
		});
});

server.listen(9000, () => console.log(`This server is OVER 9000!!`)); //set server on localhost:9000
