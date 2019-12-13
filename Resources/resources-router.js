const express = require("express");
const resources = require("./resources-model");
const router = express.Router();

router.get("/", (req, res) => {
  resources
    .get()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "error retrieving resources"
      });
    });
});

router.post("/", (req, res) => {
  const body = req.body;

  resources
    .add(body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "error posting resource"
      });
    });
});
module.exports = router;
