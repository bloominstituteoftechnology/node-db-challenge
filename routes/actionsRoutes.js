const express = require("express");
const actionRouter = express.Router();

const db = require("../db/dbConfig");

//middleware
const bodyChecker = require("../db/middleware/actionsBodyCheck.js");
//middleware^^^

actionRouter.get("/", (req, res) => {
  db("actions")
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({ error, message: error.message });
    });
});

actionRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where({ id })
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json({ error, message: error.message });
    });
});

actionRouter.post("/", bodyChecker, (req, res) => {
  db("actions")
    .insert(req.body)
    .then(actionId => {
      res.status(200).json(actionId);
    })
    .catch(error => {
      res.status(500).json({ error, message: error.message });
    });
});

actionRouter.put("/:id", bodyChecker, (req, res) => {
  const { id } = req.params;
  db("actions")
    .update(req.body)
    .where({ id })
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      res.status(500).json({ error, errorMessage: error.message });
    });
});

actionRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      res.status(500).json({ error, errorMessage: error.message });
    });
});

module.exports = actionRouter;
