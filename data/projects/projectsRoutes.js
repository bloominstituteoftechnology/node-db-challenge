const express = require("express");
const route = express.Router();
const db = require("../dbConfig");

route.get("/", async (req, res) => {
  try {
    const projects = await db("projects");
    res.json(projects);
  } catch (err) {
    res.json({ error: "Could not retrieve projects data." });
  }
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const project = await db("projects")
    .where({ id })
    .first();

  try {
    !project
      ? res
          .status(404)
          .json({ error: "A project with that ID does not exist." })
      : res.json({ project });
  } catch (err) {
    res.json({ error: "Could not retrieve the project data." });
  }
});

module.exports = route;
