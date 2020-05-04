const express = require("express");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await db("Resources"));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  res.json(
    await db("Resources").insert({
      name: req.body.name,
      description: req.body.description,
      project_id: req.body.project_id,
    })
  );
});

module.exports = router;
