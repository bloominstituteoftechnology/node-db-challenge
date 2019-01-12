const express = require("express");
const knex = require("knex");
const server = express();
const dbConfig = require("./knexfile.js");
const db = knex(dbConfig.development);
const PORT = 5675;

server.use(express.json());

server.get("/", (req, res) => {
  res.send(
    "Hello this is:<h1>Sprint Challenge - RDBMS</h1><h3>by Rob Salzberg</h3>"
  );
});

server.get("/api/projects/:id", (req, res) => {
	const project_id = req.params.id;
	db("projects")
		.where({ project_id: project_id })
		.then(project => {
			db("actions")
				.where({ project_id })
				.then(action => {
					project[0].actions = action;
					res.status(200).json(project[0]);
				});
		});
});

server.post("/api/projects", (req, res) => {
	const project = req.body;
	if (project === "") {
		res.status(500).json({ error: "Please enter a project" });
	} else {
		db.insert(project)
			.into("projects")
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
			.into("actions")
			.then(id => {
				res.status(200).json(id);
			})
			.catch(err => {
				res.status(500).json({ error: "Problem posting action" });
			});
	}
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
