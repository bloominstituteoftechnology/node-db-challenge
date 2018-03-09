const express = require('express');

const projectDb = require('../controllers/projectController');

const projectRouter = express.Router();

projectRouter.get('/', (req, res) => {
	projectDb.getAll()
		.then((projects) => {
			res.status(200).json(projects);
		})
		.catch(err => {
			res.status(500).json({ error: `Could not retreive projects ${err}` });
		});
});

projectRouter.post('/', (req, res) => {
	const project = req.body;
	projectDb.addproject(project)
		.then((projectAdded) => {
			res.status(200).json(projectAdded);
		})
		.catch(err => {
			res.status(500).json({ error: `Could not add project ${err}` });
		});
});

projectRouter.get('/:id', (req, res) => {
	const { id } = req.params;
	projectDb.getById(id)
		.then((project) => {
			if (project) {
				res.status(200).json(project);
			} else {
				res.status(422).json({ error: 'project not found' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: `Could not retreive projects ${err}` });
		});
});

projectRouter.delete('/:id', (req, res) => {
	const { id } = req.params;
	projectDb.destroy(id)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ success: true });
			} else {
				res.status(422).json({ error: 'project not found' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: `Could not remove project ${err}` });
		});
});

projectRouter.put('/:id', (req, res) => {
	const { id } = req.params;
	const project = req.body;

	projectDb.update(id, project)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ success: true });
			} else {
				res.status(422).json({ error: 'project not found' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: `Could not update project ${err}` });
		});
});

module.exports = projectRouter;
