const express = require("express");
const route = express.Router();
const db = require("../dbConfig");

route.get("/", async (req, res) => {
  try {
    const projects = await db("projects");
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Could not retrieve projects data." });
  }
});

module.exports = route;
