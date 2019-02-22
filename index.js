const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile");
const server = express();

server.use(express.json());

const db = knex(knexConfig.development);

server.get('/', async (req, res) => {
  try {
    res.send('SANITY CHECK')

  } catch (error) {
    res.send(500).json({message: 'Server Error'})
  }

});

//GET project endpoint with ID
server.get("/api/projects/:id", (req, res) => {
  const id = req.params.id;
  db(id)
    .join("actions", "projects.id", "actions.project_Id")
    .select("projects.id", "projects.name", "actions.description")
    .where({ "projects.id": id })

    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(400).json({ message: "Not found" });
    });
});

//Post endpoints
server.post("/api/actions", (req, res) => {
  db.insert(req.body)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json({ error: "The action(s) couldn't be added." });
    });
});

server.post("/api/projects", (req, res) => {
  db.insert(req.body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({ error: "The project(s) couldn't be added." });
    });
});

server.put("/api/actions/:id", (req, res) => {
  db.update(req.params.id, req.body)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "This action can't be updated at this time." });
    });
});

server.put("/api/projects/:id", (req, res) => {
  db.update(req.params.id, req.body)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "This project can't be updated at this time." });
    });
});

server.delete("/api/actions/:id", (req, res) => {
  db.remove(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json({ message: "Action not deleted" });
    });
});

server.delete("/api/projects/:id", (req, res) => {
  db.remove(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json({ message: "Project not deleted" });
    });
});

server.listen(3000, () => console.log("server up on 3000"));
