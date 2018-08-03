const express = require("express");
const projectsRouter = express.Router();
const db = require("../data/db");

projectsRouter.get("/", (req, res) => {
  db("projects")
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => res.status(500).json(err.message));
});

projectsRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  db("projects")
    .where("id", Number(id))
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => res.status(500).json(err.message));
});

projectsRouter.post("/", (req, res) => {
  const project = req.body;
  db.insert(project)
    .into("projects")
    .then(ids => {
      const id = ids[0];
      res.status(201).json({ id, ...post });
    })
    .catch(err => res.status(500).json(err.message));
});

projectsRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  db("projects")
    .where("id", id)
    .update(changes)
    .then(ids => {
      const id = ids[0];
      res.status(200).json({ id, ...changes });
    })
    .catch(err => res.status(500).json(err.message));
});

projectsRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  db("posts")
    .where("id", id)
    .del()
    .then(ids => {
      res.status(200).json("PROJECT DELETED SUCCESSFULLY");
    })
    .catch(err => res.status(500).json(err.message));
});

module.exports = projectsRouter;
