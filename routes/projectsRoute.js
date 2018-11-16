const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

router.post("/", (req, res) => {
  db("projects")
    .insert(req.body)
    .then(id => res.status(200).json(id))
    .catch(err => res.status(500).json(err));
});

router.get("/", (req, res) => {
  db("projects").then(projects => res.status(200).json(projects));
});

module.exports = router;
