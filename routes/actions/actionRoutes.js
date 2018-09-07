const express = require("express");
const knex = require("knex");

const dbConfig = require("../../knexfile");

const db = knex(dbConfig.development);

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  db("actions")
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  db("actions")
    .where({ id: req.params.id })
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

router.post("/", (req, res) => {
  const action = req.body;
  if (!action) {
    res.status(400).json({ message: "Please provide a action name." });
  }
  db.insert(action)
    .into("actions")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  db("actions")
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "No action with this ID was found." });
      }
    })
    .catch(err => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  const action = req.body;
  console.log(action);
  db("actions")
    .where({ id: req.params.id })
    .update(action)
    .then(action => {
      if (action) {
        res.status(200).json({ message: "Update Completed" });
      } else {
        res.status(404).json({ message: "No action with this ID was found." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Update Failed!" });
    });
});

module.exports = router;