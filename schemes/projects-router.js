const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.find()
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id", (req, res) => {
  Projects.findById(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Count not retrieve project" });
    });
});

router.post("/", (req, res) => {
  Projects.add(req.body)
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ message: "Fuckkkk" });
    });
});

router.put("/:id", (req, res) => {
  Projects.update(req.params.id, req.body)
    .then(u => {
      res.status(200).json(u);
    })
    .catch(err => {
      res.status(500).json({ message: "Noooooo" });
    });
});

router.delete("/:id", (req, res) => {
  Projects.remove(req.params.id)
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not delete" });
    });
});
module.exports = router;
