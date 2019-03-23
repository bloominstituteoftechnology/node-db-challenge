const express = require('express');
const router = express.Router();
const projectDB = require('../data/helpers/projectHelpers');
const actionDB = require('../data/helpers/actionHelpers')


// GET
router.get('/', async (req, res) => {
	/*projectDB
		.getAll()
		.then(projects => {
			res.json(projects);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error : err });
		});*/
	try {
		const allProjects = await projectDB.getAll('projects');
		res
			.status(200)
			.json(allProjects);
	}
	catch (error) {
		res
			.status(500)
			.json(error);
	}
}); 

// GET by ID
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	projectDB
		.getProject(id)
		.then(project => {
			const projectSelected = project[0];
			actionDB
				.getActionsByProjectId(id)
				.then(actionResponse => {
					projectSelected.actions = actionResponse;
					res.json(projectSelected);
			});
		})
		.catch(err => {
			res.status(500).json({ message: 'Could not retrieve project' });
		});
});

// POST
router.post('/', (req, res) => {
	const newProject = req.body;
	projectDB
		.insert(newProject)
		.then(id => {
			res.json({ message: `New project created with id ${id}` });
		})
		.catch(err => {
			if(newProject.name && err.code === 'SQLITE_CONSTRAINT') {
				res.status(400).json({ message: 'Please enter a unique project name' });
			}
			else if (err.code === 'SQLITE_CONSTRAINT') {
				res.status(400).json({ message: 'Project name is required' });
			}
			else {
				res.status(500).json({ message: 'Could not create project' });
			}
		});
});

// UPDATE
router.put('/:id', (req, res) => {
	const { id } = req.params;
	const update = req.body;
	projectDB
		.update(id, update)
		.then(response => {
			res.json({ message: `Project with id ${response} has been updated` });		
		})
		.catch(err => {
			res.status(500).json({ error: err });
		});
});

// DELETE
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	projectDB
		.remove(id)
		.then(count => {
			res.json({ message: `Project and all actions have been deleted` });
		})
		.catch(err => {
			res.status(500).json({ error: err });
		});
});


module.exports = router;