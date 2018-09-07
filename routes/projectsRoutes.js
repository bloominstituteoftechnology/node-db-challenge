const express = require("express");
const router = express.Router();
const db = require("../dbConfig");

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
