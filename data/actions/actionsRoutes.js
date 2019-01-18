const express = require("express");
const route = express.Router();

const db = require("../dbConfig");

route.get("/", async (req, res) => {
  try {
    const actions = await db("actions");
    res.json(actions);
  } catch (err) {
    res.status(500).json({ error: "Could not retrieve actions data." });
  }
});

module.exports = route;
