const express = require("express");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await db("Tasks"));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  res.json(
    await db("Tasks").insert({
      description: req.body.description,
      notes: req.body.notes,
      project_id: req.body.project_id,
      completed: req.body.completed,
    })
  );
});

module.exports = router;
