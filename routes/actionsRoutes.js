const express = require("express");
const router = express.Router();
const db = require("../dbConfig");

const helpers = require("../db/helpers");

router.post("/", (req, res) => {
	const action = req.body;
	if (!action.description) {
		return res
			.status(400)
			.json({ message: "Please provide a name for your action" });
	}
	db.insert(action)
		.into("actions")
		.then(id => {
			res.status(201).json(id);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.get("/", (req, res) => {
	db("actions")
		.then(actions => {
			res.status(201).json(actions);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.get("/:id", (req, res) => {
	db("actions")
		.where({ id: req.params.id })
		.then(action => {
			res.status(201).json(action);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.put("/:id", (req, res) => {
	const action = req.body;
	if (!action.description) {
		return res
			.status(400)
			.json({ message: "Please include a description" });
	}
	db("actions")
		.where({ id: req.params.id })
		.update({
			description: action.description,
			notes: action.notes,
			completed: action.completed,
		})
		.then(ver => {
			res.status(201).json(ver);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.delete("/:id", (req, res) => {
	db("actions")
		.where({ id: req.params.id })
		.delete()
		.then(ver => {
			res.status(201).json(ver);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.get("/context/:id", (req, res) => {
	helpers
		.getActionsContext(req.params.id)
		.then(data => {
			if (!data)
				return res
					.status(404)
					.json({ message: "No Action with that id" });
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

module.exports = router;
