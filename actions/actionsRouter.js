const express = require("express");
const knex = require("knex");

const knexConfig = require("../knexfile");

const router = express.Router();
const db = knex(knexConfig.development);

router.post("/", (req, res) => {
  const { description, notes, completed, project_id } = req.body;
  if (description && notes && !completed && project_id) {
    db("actions")
      .insert(req.body)
      .then(id => res.status(201).json(id))
      .catch(err => res.status(500).json(err));
  } else {
    res.status(404).json({
      message: "Please provide a description, notes, and completed fields."
    });
  }
});

router.delete("/:id", (req, res, next) => {
  db("actions")
    .where({ id: req.params.id })
    .del()
    .then(count =>
      count ? res.status(200).json(count) : next(Error("ID_NOT_FOUND"))
    )
    .catch(next);
});

module.exports = router;
