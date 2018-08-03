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

module.exports = actionsRouter;
