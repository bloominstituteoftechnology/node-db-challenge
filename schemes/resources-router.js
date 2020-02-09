const express = require("express");
const Resources = require("./resources-model");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.find()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Error getting resources" });
    });
});

router.post("/", (req, res) => {
  Resources.add(req.body)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add resource" });
    });
});

module.exports = router;
