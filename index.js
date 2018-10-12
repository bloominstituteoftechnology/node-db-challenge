const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api/projects/:id", (req, res) => {
	const project_id = req.params.id;
	db("Projects")
		.where({ project_id: project_id })
		.then(project => {
			db("Actions")
				.where({ project_id })
				.then(action => {
					res.status(200).json({ ...project, actions: action });
				});
		});
});

server.post("/api/projects", (req, res) => {
	const project = req.body;
	if (project === "") {
		res.status(500).json({ error: "Please enter a project" });
	} else {
		db.insert(project)
			.into("Projects")
			.then(id => {
				res.status(200).json(id);
			})
			.catch(err => {
				res.status(500).json({ error: "Problem posting project" });
			});
	}
});

server.post("/api/projects/:id/actions", (req, res) => {
	const action = req.body;
	if (action === "") {
		res.status(500).json({ error: "Please enter an action" });
	} else {
		db.insert(action)
			.into("Actions")
			.then(id => {
				res.status(200).json(id);
			})
			.catch(err => {
				res.status(500).json({ error: "Problem posting project" });
			});
	}
});

server.listen(9000, () => console.log("\nAPI running on 9k\n"));
