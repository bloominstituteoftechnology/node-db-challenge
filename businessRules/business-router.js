/*jshint esversion: 6 */
const express = require("express");

const Business = require("./business-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Business.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/resources", (req, res) => {
  Business.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

module.exports = router;
