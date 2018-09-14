const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const dbConfig = require("./knexfile");
const db = knex(dbConfig.development);

const server = express();
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("API RUNNING...");
});

server.get("/projects", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

server.get("/projects/:id", (req, res) => {
  const { id } = req.params;

  db("projects")
    .where("id", "=", id)
    .then(project => {
      if (project.length === 0) {
        res.status(401).json({
          message: "the project with the specified ID does not exist"
        });
      }
      db("actions")
        .where("project_id", "=", id)
        .then(actions => {
          project[0].actions = actions;
          res.status(200).json(project);
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: "project info could not be retrieved" });
        });
    })
    .catch(err => {
      res.status(500).json({ error: "project info could not be retrieved" });
    });
});

server.post("/projects", (req, res) => {
  const project = req.body;
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ errorMessage: "please add project title" });
  }

  db.insert(project)
    .into("projects")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err));
});

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.put("/projects/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("projects")
    .where("id", "=", id)
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post("/actions", (req, res) => {
  const action = req.body;
  if (!action.description) {
    res.status(400).json({ errorMessage: "please provide action descript." });
  }

  db.insert(action)
    .into("actions")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err));
});

server.get("/actions", (req, res) => {
  db("actions")
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

server.get("/actions/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where("id", "=", id)
    .then(action => {
      if (!action) {
        res
          .status(404)
          .json({ message: "the action with this id does not exist" });
      }
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({ error: "The action info could not be retrieved" });
    });
});

server.put("/actions/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  db("actions")
    .where("id", "=", id)
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.delete("/actions/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.listen(8000);
