const express = require("express");
const knex = require("../database/db");
const actions = require("./actionControllers");

const actionRouter = express.Router();

actionRouter.get("/", (req, res) => {
  return actions.getAll
    .then(actions => {
      if (actions.length) {
        res.status(200).json(actions);
      } else {
        res.status(404).json({ err: "no actions found" });
      }
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

actionRouter.post("/", (req, res) => {
  actions
    .addOne(req.body)
    .then(id => {
      res.status(200).json({ success: `action created with id: ${id}` });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

actionRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  actions
    .update(id, req.body)
    .then(success => {
      res.status(200).json({ msg: `action ${id} updated!` });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

actionRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  actions
    .nuke(id)
    .then(succ => {
      res.status(200).json({ msg: "action deleted." });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});
module.exports = actionRouter;
