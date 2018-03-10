const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./database/db');

const server = express();
server.use(bodyParser.json());

// CRUD for /actions

// create
server.post('/actions', (req, res) => {
	const { description, notes, completed } = req.body;
	if (!description || !notes) res.status(404).json({message: 'Please provide a description and note'});
	knex('actions').insert({ description, notes, completed })
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// retrieve
server.get('/actions', (req, res) => {
	knex('actions')
		.then(actions => {
			res.status(200).json(actions);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

server.get('/actions/:id', (req, res) => {
	const { id } = req.params;
	knex('actions').where({ id })
		.then(action => {
			if (action.length > 0) res.status(200).json(action); 
			else {
				res.status(404).json({message: 'Action does not exist.'});
			}
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// update
server.put('/actions/:id', (req, res) => {
	const { id } = req.params;
	const { description, notes, completed } = req.body;
	if (!description || !notes) res.status(404).json({message: 'Must provide updated information'});
	knex('actions').where({ id }).update({ description, notes, completed })
		.then(action => {
			res.status(201).json({message: 'Action updated successfully'}); 
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// delete
server.delete('/actions/:id', (req, res) => {
	const { id } = req.params;
	knex('actions').where({ id }).del()
		.then(() => {
			res.status(201).json({message: 'Action deleted successfully.'});
		})
		.catch(err => {
			res.status(500).json(err);
		});
})

// CRUD for /projects

// create
server.post('/projects', (req, res) => {
	const { name, description, completed } = req.body;
	if (!name || !description) res.status(404).json({message: 'Must provide both name and description.'});
	knex('projects').insert({ name, description, completed })
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json(err);
		})
})

// retrieve
server.get('/projects', (req, res) => {
	knex('projects')
		.then(projects => {
			res.status(200).json(projects);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// server.get('/projects/:id', (req, res) => {
// 	const { id } = req.params;
// 	knex('projects').where({ id })
// 		.then(project => {
// 			if (project.length > 0) res.status(200).json(project); 
// 			else {
// 				res.status(404).json({message: 'Project does not exist.'});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).json(err);
// 		});
// });

// new endpoint should display the project info along with it's associated actions and contexts
server.get('/projects/:id', (req, res) => {
	const id = req.params.id;

	let retObj = {
		id: null,
		name: 'project name',
		description: 'project description',
		completed: false,
		actions: [],
		contexts: []
	}

	knex('projects_actions').where('projects_actions.projectId', id)
		.join('projects', 'projects_actions.projectId', '=', 'projects.id')
		.join('actions', 'actions.id', '=', 'projects_actions.actionId')
		.join('projects_contexts', 'projects_contexts.projectId', '=', 'projects_actions.projectId')
		.join('contexts', 'contexts.id', '=', 'projects_contexts.contextId')
			.then(data => {
				if (data.length > 0) {
					data.forEach(obj => {
						retObj.id = obj.projectId;
						retObj.name = obj.name;
						retObj.description = obj.project_description;
						if (obj.completed === 1) retObj.completed = true;
						retObj.actions.push({
							id: obj.actionId,
							description: obj.action_description,
							notes: obj.notes,
							completed: obj.action_completed	
						});
						retObj.contexts.push({
							id: obj.contextId,
							context: obj.contexts
						});
					});
					retObj.actions.forEach(action => {
						if (action.completed === 1) action.completed = true;
						else {
							action.completed = false;
						}
					})
					res.status(200).json(retObj);
					// res.status(200).json(data);
				} else {
					res.status(404).json({message: 'Project does not exist.'});
				}
			})
			.catch(err => {
				res.status(500).json(err);
			});
});

// update
server.put('/projects/:id', (req, res) => {
	const { id } = req.params;
	const project = req.body;
	if (!project) res.status(404).json({message: 'Must provide updated project information.'});
	knex('projects').where({ id }).update(project)
		.then(project => {
			res.status(201).json({message: 'Project updated successfully.'});
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// delete
server.delete('/projects/:id', (req, res) => {
	const { id } = req.params;
	knex('projects').where({ id }).del()
		.then(() => {
			res.status(201).json({message: 'Project deleted successfully.'});
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// CRUD for /contexts

// create
server.post('/contexts', (req, res) => {
	const { contexts } = req.body;
	if (!contexts) res.status(404).json({message: 'Must provide a context.'});
	knex('contexts').insert({ contexts })
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// retrieve
server.get('/contexts', (req, res) => {
	knex('contexts')
		.then(contexts => {
			res.status(200).json(contexts);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

server.get('/contexts/:id', (req, res) => {
	const { id } = req.params;
	knex('contexts').where({ id })
		.then(context => {
			if (context.length > 0) res.status(200).json(context);
			else {
				res.status(404).json({message: 'Context does not exist.'});
			}
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// update
server.put('/contexts/:id', (req, res) => {
	const { id } = req.params;
	const context = req.body;
	if (!context) res.status(404).json({message: 'Must provide an updated context.'});
	knex('contexts').where({ id }).update(context)
		.then(context => {
			res.status(201).json(context);
		})
		.catch(err => {
			res.status(500).json(err);
		});
 });

// delete
server.delete('/contexts/:id', (req, res) => {
	const { id } = req.params;
	knex('contexts').where({ id }).del()
		.then(() => {
			res.status(201).json({message: 'Context successfully deleted.'});
		})
		.catch(err => {
			res.status(500).json(err);
		})
})

const port = 5000;
server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
})