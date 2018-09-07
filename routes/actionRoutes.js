const express = require("express");
const actions = require("../helpers/actionsDB");
const router = express.Router();

router.get("/", (req, res) => {
    actions
      .getActions()
      .then(Action => {
        if (Action.length === 0) {
          res
            .status(404)
            .json({ message: "The action with the specified ID does not exist" });
        } else {
          res.status(200).json(Action);
        }
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error fetching data" });
      });
  });
  
  router.get("/:id", (req, res) => {
    actions
      .getActions(req.params.id)
      .then(Action => {
        if (Action.length === 0) {
          res
            .status(404)
            .json({ message: "The action with the specified ID does not exist" });
        } else {
          res.status(200).json(Action);
        }
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error fetching data" });
      });
  });
  
  router.post("/", (req, res) => {
    actions
      .addAction(req.body)
      .then(posts => {
        res.status(200).json(posts);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error updating data" });
      });
  });
  
  router.put("/:id", (req, res) => {
    actions
      .editAction(req.params.id, req.body)
      .then(posts => {
        res.status(200).json(posts);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error updating data" });
      });
  });
  
  router.delete("/:id", (req, res) => {
    actions
      .deleteAction(req.params.id)
      .then(Action => {
        res.status(200).json(Action);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error deleting data" });
      });
  });

  module.exports = router;