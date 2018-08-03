const express = require("express");
const actionsRouter = express.Router();
const db = require("../data/db");

actionsRouter.get("/", (req, res) => {
  db("actions")
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => res.status(500).json(err.message));
});

actionsRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  db("actions")
    .where("id", id)
    .first()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => res.status(500).json(err));
});

actionsRouter.post("/", (req, res) => {
  const action = req.body;
  db.insert(action)
    .into("actions")
    .then(ids => {
      const id = ids[0];
      res.status(201).json({ id, post });
    })
    .catch(err => res.status(500).json(err.message));
});

actionsRouter.put("/:id", (req, res) => {
  const changes = req.body;
  const id = req.params.id;
  db("actions")
    .where("id", id)
    .update(changes)
    .then(ids => {
      const id = ids[0];
      res.status(200).json({ id, ...changes });
    })
    .catch(err => res.status(500).json(err.message));
});

actionsRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  db("actions")
    .where("id", id)
    .del()
    .then(ids => {
      res.status(200).json("ACTION DELETED SUCCESSFULLY");
    })
    .catch(err => res.status(500).json(err.message));
});

module.exports = actionsRouter;
