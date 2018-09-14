const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

//==================Data Table=========================//
const dbConfig = require("./knexfile");
const db = knex(dbConfig.development);
//==================Data Table=========================//

const server = express();

server.use(express.json());
server.use(helmet());

//===================End Points=======================//
//===========================project end points==========================//
server.get("/api/project", (req, res) => {
  db("projects")
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot be retrieved" });
    });
});

server.get("/api/project/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .select("project_name")
    .where({ id })
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot retrieve with id" });
    });
});

server.post("/api/project", (req, res) => {
  const projects = req.body;

  db.insert(projects)
    .into("projects")
    .then(ids => {
      res.status(200).json(ids);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Pass in correct credentials" });
    });
});

server.put("/api/project/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("projects")
    .where({ id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot update" });
    });
});

server.delete("/api/project/:id", (req, res) => {
  const { id } = req.params;

  db("projects")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot delete" });
    });
});
//===========================project end points==========================//
//============================action end points=========================//
server.get("/api/action", (req, res) => {
  db("actions")
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot be retrieved" });
    });
});

server.get("/api/action/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .select("action_id")
    .where({ id })
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot retrieve with id" });
    });
});

server.post("/api/action", (req, res) => {
  const projects = req.body;

  db.insert(projects)
    .into("actions")
    .then(ids => {
      res.status(200).json(ids);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Pass in correct credentials" });
    });
});

server.put("/api/action/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("actions")
    .where({ id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot update" });
    });
});

server.delete("/api/action/:id", (req, res) => {
  const { id } = req.params;

  db("actions")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Cannot delete" });
    });
});
//============================action end points=========================//
//===================End Points=======================//

server.listen(4000, () =>
  console.log(`\n=== Web API Running on Port:4000 ===\n`)
);
