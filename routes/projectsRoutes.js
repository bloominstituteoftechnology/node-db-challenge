const express = require("express");
const router = express.Router();
const db = require("../dbConfig");

const helpers = require("../db/helpers");

router.post("/", (req, res) => {
	const project = req.body;
	if (!project.name || !project.description) {
		return res
			.status(400)
			.json({ message: "Please provide a name and/or description" });
	}
	db.insert(project)
		.into("projects")
		.then(ids => {
			res.status(201).json(ids);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.get("/", (req, res) => {
	db("projects")
		.then(projects => {
			res.status(201).json(projects);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.get("/:id", (req, res) => {
	db("projects")
		.where({ id: req.params.id })
		.then(project => {
			res.status(201).json(project);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.put("/:id", (req, res) => {
	const project = req.body;
	if (!project.name) {
		return res
			.status(400)
			.json({ message: "Please include name and/or description" });
	}
	db("projects")
		.where({ id: req.params.id })
		.update({
			name: project.name,
			description: project.description,
			completed: project.completed,
		})
		.then(ver => {
			res.status(201).json(ver);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.delete("/:id", (req, res) => {
	db("projects")
		.where({ id: req.params.id })
		.delete()
		.then(ver => {
			res.status(201).json(ver);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.get("/actions/:id", (req, res) => {
	helpers
		.getProject(req.params.id)
		.then(data => {
			if (!data)
				return res
					.status(404)
					.json({ message: "No project with that id" });

			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

module.exports = router;
