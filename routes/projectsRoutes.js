const express = require("express");
const router = express.Router();
const db = require("../dbConfig");

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

module.exports = router;
