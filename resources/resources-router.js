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

router.post("/", (req, res) => {
  const resourceBody = req.body;
  // console.log(resourceBody, "taskData tasks-router line 37");

  Resources.add(resourceBody)
    .then(createResource => {
      // console.log(createResource, "task line 40");
      res
        .status(201)
        .json({ message: "New resource created!", createResource });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

router.delete("/:id", validateId, (req, res) => {
  const id = req.params.id;

  Resources.getResourceById(id)
    .then(deleteResource => {
      Resources.remove(id)
        .then(deleted => {
          res.status(200).json({
            message: `The resource with id: ${id} was deleted`,
            deleteResource
          });
        })
        .catch(() => {
          res
            .status(500)
            .json({ message: "There was an error deleting the resource" });
        });
    })
    .catch(() => {
      res.status(500).json({
        message: "Deleting the resource...Something went wrong, try again!"
      });
    });
});

// custom middleware-----------------------------

// Validate ID
function validateId(req, res, next) {
  const id = req.params.id;
  Resources.getResourceById(id)
    .then(id => {
      req.project = id;
    })
    .catch(() => {
      res.status(400).json({ message: "invalid resource id" });
    });
  next();
}

module.exports = router;
