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


  // POST A NEW PROJECT //

server.post("/api/projects", (req, res) => {
    const project = req.body;
    db("projects")
      .insert(project)
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(err => {
        res.status(500).json({ error: "Could not add a new project", err });
      });
  });


  // POST A NEW ACTION //

server.post("/api/actions", (req, res) => {
    const action = req.body;
    db("actions")
      .insert(action)
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(err => {
        res.status(500).json({ error: "Could not add a new action", err });
      });
  });


  // UPDATE A PROJECT //

server.put("/api/projects/:id", (req, res) => {
    const changes = req.body;
    const { id } = req.params;
  
    db("projects")
    .where({ id: id })
    .update(changes)
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => res.status(500).json({ error: err }));
  });
  
  
  // UPDATE AN ACTION //
  
  server.put("/api/actions/:id", (req, res) => {
    const changes = req.body;
    const { id } = req.params;
  
    db("actions")
    .where({ id: id })
    .update(changes)
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => res.status(500).json({ error: err }));
  });
  
  
  // DELETE A PROJECT //
  
  server.delete("/api/projects/:id", (req, res) => {
    const { id } = req.params;
  
    db("projects")
      .where({ id: id })
      .delete()
      .then(count => {
        res.status(200).json({ count });
      })
      .catch(err => res.status(500).json({ error: err }));
  });
  
  
  // DELETE AN ACTION // 
  
  server.delete("/api/actions/:id", (req, res) => {
    const { id } = req.params;
  
    db("actions")
      .where({ id: id })
      .delete()
      .then(count => {
        res.status(200).json({ count });
      })
      .catch(err => res.status(500).json({ error: err }));
  });
  
  
  server.listen(3000, () => console.log("\n=== Server running on port 3K ===\n"));
 
  
































