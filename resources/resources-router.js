const express = require("express");

const Resources = require("./resources-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Resources.getResourceById(id)
    .then(resource => {
      if (resource) {
        res.json(resource);
      } else {
        res
          .status(404)
          .json({ message: "Could not find resource with given id." });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get resource" });
    });
});

module.exports = router;
