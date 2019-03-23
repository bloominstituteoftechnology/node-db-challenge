const express = require('express');
const server = express();
const logger = require('morgan');
const heltmet = require('helmet');

const projectRouter = require('./Routes/projectRoutes');
const actionRouter = require('./Routes/actionRoutes');

const PORT = 3500;

server.use(express.json());

server.use('/projects', projectRouter);
server.use('/actions', actionRouter);

// get project by id
/*server.get('/projects/:id', (req, res) => {
	const { id } = req.params;
	db('projects')
		.where('projects.id', id)
		.then(project => {
			const projectSelected = project[0];
			console.log(projectSelected.id);
			db('actions')
				.select(
					'actions.id',
					'actions.action_description as description',
					'actions.notes',
					'actions.actions_complete as complete'
				)
				.where('actions.project_id', id)
				.then(actionResponse => {
					res.json({
						id: projectSelected.id,
						name: projectSelected.name,
						description: projectSelected.description,
						completed: projectSelected.complete,
						actions: actionResponse
					});
				});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: 'Could not retrieve project'})
		});
});

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
});*/

// Server Listening
server.listen(PORT, () => {
	console.log(`Server Listening on: ${PORT}`)
});