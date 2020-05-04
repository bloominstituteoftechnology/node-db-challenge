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

module.exports = router;
