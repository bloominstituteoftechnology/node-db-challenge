const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile.js");
const db = knex(knexConfig.development);
const server = express();

server.use(express.json());


// GET ALL PROJECTS //

server.get("/api/projects", (req, res) => {
  db("projects")
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});


// GET ALL ACTIONS //

server.get("/api/actions", (req, res) => {
    db("actions")
        .then(actions => res.status(200).json(actions))
        .catch(err => res.status(500).json(err));
  });

  
  // GET PROJECTS WITH ACTIONS //

server.get('/api/projects/:id', (req, res) => {
	const { id } = req.params; 
	db('projects') 
	    .where({ id: id }) 
		.first()
		.then((projects) => {
			if (projects) {
				db('actions') 
					.where({ project_id: id }) 
					.then((actions) => {
						projects.actions = actions; 
						res.status(200).json(projects); 
					})
					.catch((err) => res.status(500).json({ message: 'ERROR', err })); 
			} else {
				res.status(404).json({ message: 'Project not found' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'ERROR', err });
		});
});
  

































server.listen(3000, () => console.log("\n=== Server running on port 3K ===\n"));