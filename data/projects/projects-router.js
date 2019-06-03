const express = require("express");

const projectsDb = require("./projects-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await projectsDb.find();
    res.status(200).json(projects);
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the tracks" });
  }
});

module.exports = router;
