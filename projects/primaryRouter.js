const express = require('express');
const db = require('../projects/project-model');
const router = express.Router();

//PROJECT CRUD OPERATIONS -- MISSING UPDATE
router.get('/', async (req, res, next) => {
	try {
		const data = await db.getProjects();
		res.status(200).json(data);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const data = await db.getProjectsById(req.params.id);
		res.status(200).json(data);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	const newProject = req.body;
	try {
		await db.addProject(newProject);
		res.status(201).json(newProject);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		await db.removeProject(req.params.id);
		res.status(200).json({ message: 'Project Removed' });
	} catch (err) {
		next(err);
	}
});

//RESOURCES CRUD OPERATION
router.get('/resources', async (req, res, next) => {
	try {
		const data = await db.getResources();
		console.log(data);
		res.status(200).json(data);
	} catch (err) {
		next(err);
	}
});

//

router.get('/:id/tasks', async (req, res, next) => {
	try {
		const data = await db.getTasks(req.params.id);
		res.status(200).json(data);
	} catch (err) {
		next(err);
	}
});

//get all resources for a project

module.exports = router;
