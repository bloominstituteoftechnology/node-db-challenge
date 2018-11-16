const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

// G E T   B Y   I D
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("actions")
    .where({ id: id })
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => res.status(500).json(err));
});

// P O S T
router.post("/", (req, res) => {
  const project = req.body;

  db("actions")
    .insert(project)
    .returning("id")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
