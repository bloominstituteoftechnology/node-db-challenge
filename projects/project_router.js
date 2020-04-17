const express = require('express');
const Model = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
	Model.findAllProjects()
		.then(projects => {
			if (projects.length > 0) {
				res.status(201).json(projects);
			} else {
				res.status(404).json({ message: 'No projects found. Because you probably dont have any, idiot!' });
			}
		})
		.catch(err => {
			console.log('Error getting all projects', err);
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	Model.findById(id)
		.then(project => {
			if (project) {
				res.status(201).json(project);
			} else {
				res.status(404).json({ message: 'No project found, just like the amount of friends you dont have!' });
			}
		})
		.catch(err => {
			console.log('Error getting project by id', err);
		});
});

router.get('/:id/tasks', (req, res) => {
	const { id } = req.params;

	Model.findAllTasks(id)
		.then(tasks => {
			if (tasks.length > 0) {
				res.status(201).json(tasks);
			} else {
				res.status(404).json({ message: 'No tasks found, just like the amount of friends you dont have!' });
			}
		})
		.catch(err => {
			console.log('Error getting tasks', err);
		});
});

router.get('/:id/resources', (req, res) => {
	const { id } = req.params;

	Model.findAllProjectResources(id)
		.then(resource => {
			if (resource.length > 0) {
				res.status(201).json(resource);
			} else {
				res.status(404).json({ message: 'No resources found, just like the amount of friends you dont have!' });
			}
		})
		.catch(err => {
			console.log('Error getting resources', err);
		});
});

router.post('/', (req, res) => {
	const newProject = req.body;

	Model.addProject(newProject)
		.then(project => {
			if (newProject.projects_name && newProject.projects_description) {
				res.status(201).json(project);
			} else {
				res.status(404).json({
					message:
						'Error adding project. Clearly you didnt read the instructions!'
				});
			}
		})
		.catch(err => {
			console.log('Error adding project', err);
		});
});

router.post('/:id/tasks', (req, res) => {
	const newTask = req.body;
	Model.addTask(newTask)
		.then(task => {
			if (newTask.tasks_description && newTask.project_id) {
				if (newTask.completed === null) {
					{
						completed: 0;
					}
				}
				res.status(201).json(task);
			} else {
				res.status(404).json({
					message:
						'Error adding task. Clearly you didnt read the instructions!'
				});
			}
		})
		.catch(err => {
			console.log('Error adding task', err);
		});
});

router.post('/:id/resources', (req, res) => {
	const newResource = req.body;
	Model.addResources(newResource)
		.then(resource => {
			if (newResource.resources_name && newResource.project_id) {
				res.status(201).json(resource);
			} else {
				res.status(404).json({
					message:
						'Error adding resource. Clearly you didnt read the instructions!'
				});
			}
		})
		.catch(err => {
			console.log('Error adding resource', err);
		});
});



module.exports = router;