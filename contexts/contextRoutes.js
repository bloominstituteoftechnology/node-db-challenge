const express = require("express");
const knex = require("../database/db");
const contexts = require("./contextControllers");

const contextRouter = express.Router();

contextRouter.get("/", (req, res) => {
  return contexts.getAll
    .then(contexts => {
      if (contexts.length) {
        res.status(200).json(contexts);
      } else {
        res.status(404).json({ err: "no contexts found" });
      }
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

contextRouter.post("/", (req, res) => {
  contexts
    .addOne(req.body)
    .then(id => {
      res.status(200).json({ success: `action created with id: ${id}` });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

contextRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  contexts
    .update(id, req.body)
    .then(success => {
      res.status(200).json({ msg: `action ${id} updated!` });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

contextRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  contexts
    .nuke(id)
    .then(succ => {
      res.status(200).json({ msg: "action deleted." });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});
module.exports = contextRouter;
