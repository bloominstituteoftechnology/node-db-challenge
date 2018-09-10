const express = require("express");
const router = express.Router();
const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db("actions")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  db("actions")
    .where({ id: req.params.id })
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
    if (!req.body.description || !req.body.project_id) {
      return res
        .status(400)
        .json({ message: "need details/project_id" });
    }
    db.insert(req.body)
      .into("actions")
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

router.put("/:id", (req, res) => {
  if (!req.body.description) {
    return res.status(400).json({ message: "need details" });
  }
  db("actions")
    .where({ id: req.params.id })
    .update({
      description: req.body.description,
      notes: req.body.notes,
      completed: req.body.completed
    })
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  db("actions")
    .where({ id: req.params.id })
    .delete()
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
