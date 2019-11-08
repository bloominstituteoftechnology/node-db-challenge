const express = require("express");
const Resources = require("./model");
const router = express.Router();

// getting list of resources
router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => res.status(200).json(resources))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Could not get resources" });
    });
});

// adding esources
router.post("/", (req, res) => {
  Resources.addResource(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Could not create new resource" });
    });
});

module.exports = router;
