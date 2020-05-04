const express = require("express");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await db("Projects"));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  res.json(
    await db("Projects").insert({
      name: req.body.name,
      description: req.body.description,
      completed: req.body.completed,
    })
  );
});

module.exports = router;
