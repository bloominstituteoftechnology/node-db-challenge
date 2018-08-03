const express = require("express");
const db = require("./data/db");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("working...");
});

//get project
server.get("/projects", (req, res) => {
  db("projects").then(projects => {
    res.status(200).json(projects);
  });
});
//post project
server.post("/projects", (req, res) => {
  const project = req.body;
  db.insert([project])
    .into("projects")
    .then(ids => {
      const id = ids[0];
      res.status(201).json({ id, ...project });
    });
});
// server.get("projects/:id", (req, res) => {
//   const { id } = req.params;
//   db("projects")
//     .where("id", Number(id))
//     .then(project => {
//       res.status(200).json(project);
//     });
// });

server.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where("id", Number(id))
    .then(user => {
      res.status(200).json(user);
    });
});

//post project by id
server.get("/projects/:id/actions", (req, res) => {
  db("projects")
    .join("actions", "actions.project_id", "=", "projects.id")
    .select(
      "projects.id",
      "projects.name",
      "projects.description",
      "projects.completed",
      "actions.id",
      "actions.description",
      "actions.notes",
      "actions.completed"
    )
    .where("projects.id", req.params.id)
    .then(project => {
      res.status(200).json(project);
    });
});
// put projects
server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const project = req.body;
  db("projects")
    .where("id", id)
    .update(project)
    .then(response => {
      res.status(200).json(project);
    });
});

//delete projects
server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where("id", id)
    .delete()
    .then(projects => {
      res.status(200).json({ message: "project deleted" });
    });
});
//get actions
server.get("/actions", (req, res) => {
  db("actions").then(actions => {
    res.status(200).json(actions);
  });
});
//post actions
server.post("/actions", (req, res) => {
  const action = req.body;
  db.insert([action])
    .into("actions")
    .then(ids => {
      const id = ids[0];
      res.status(201).json({ id, ...action });
    });
});
//delete actions
server.delete("/actions/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where("id", id)
    .delete()
    .then(projects => {
      res.status(200).json({ message: "action deleted" });
    });
});

//put actions
server.put("/actions/:id", (req, res) => {
  const { id } = req.params;
  const action = req.body;
  db("actions")
    .where("id", id)
    .update(action)
    .then(response => {
      res.status(200).json(action);
    });
});

const port = 8000;
server.listen(port, function() {
  console.log(`Web API listening on http://localhost:${port}`);
});
