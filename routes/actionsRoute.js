const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

router.post("/", (req, res) => {
  db("actions")
    .insert(req.body)
    .then(id => res.status(200).json(id))
    .catch(err => res.status(500).json(err));
});

router.get("/", (req, res) => {
  db("actions")
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
