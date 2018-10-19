const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

// Create New project
router.post("/", (req, res) => {
  const name = req.body;

  db.insert(name)
    .into("projects")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get All projects
router.get("/", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
