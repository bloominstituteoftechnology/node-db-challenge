const express = require("express");

const db = require("../models/resource-model");

const router = express.Router();

router.get("/", (req, res) => {
  db.find().then((resources) => res.status(200).json(resources));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id).then((resource) => res.status(200).json(resource));
});

router.post("/", (req, res) => {
  // data example { name: 'required', description: 'optional' }
  const resourceData = req.body;

  db.add(resourceData)
    .then((addedResource) => {
      res.status(201).json(addedResource);
    })
    .catch((err) => console.log({ err }));
});

module.exports = router;
