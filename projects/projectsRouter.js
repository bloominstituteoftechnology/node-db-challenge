const express = require("express");
const knex = require("knex");

const knexConfig = require("../knexfile");

const router = express.Router();
const db = knex(knexConfig.development);

router.post("/", (req, res) => {
  const { name, description, completed } = req.body;
  if (name && description && !completed) {
    db("projects")
      .insert(req.body)
      .then(id => res.status(201).json(id))
      .catch(err => res.status(500).json(err));
  } else {
    res.status(404).json({
      message: "Please provide a name, description, and completed fields."
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const projects = await db("projects")
      .where({
        "projects.id": req.params.id
      })
      .first();
    const actions = await db("actions").where({
      "actions.project_id": req.params.id
    });
    projects
      ? res.status(200).json({ ...projects, actions })
      : res.status(404).json({
          message: "The project with the specified id does not exist."
        });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
