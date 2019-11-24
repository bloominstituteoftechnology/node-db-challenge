const express = require("express");
const Resources = require("./resource-model");
const router = express.Router();

router.get("/", (req, res) => {
  Resources.find()
    .then(resource => res.status(200).json(resource))
    .catch(err => res.status(500).json({ message: "Could not get resources" }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Resources.findById(id)
    .then(resource => {
      if (!resource[0]) {
        return res.status(404).json({ message: "This id does not exist" });
      } else res.status(200).json(resource);
    })
    .catch(err =>
      res.status(500).json({ message: "Could not get this resource" })
    );
});

router.post("/", (req, res) => {
  const resource = req.body;
  if (!resource.resource_name) {
    return res.status(400).json({ message: "Please enter a resource name" });
  } else if (!resource.description) {
    return res
      .status(400)
      .json({ message: "Please enter a description for the resource" });
  } else
    Resources.add(resource)
      .then(resource => res.status(201).json(resource))
      .catch(err =>
        res
          .status(500)
          .json({ message: "Could not create a new resource", error: err })
      );
});

module.exports = router;
