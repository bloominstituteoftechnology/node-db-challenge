const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

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
