const express = require("express");
const DB = require("../../data/helpers");
const router = express.Router();

// ADD A NEW PROJECT TO THE DB
router.post("/", (req, res) => {
  const { project } = req.body;
  DB.addProject(project)
    .then(result => {
      res.status(201).json({ result });
    })
    .catch(err => {
      res.status(500).json({ error: "error code: NOPOSPJ" });
    });
});

// GET A PROJECT BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  DB.getProject(id)
    .then(result => {
      result = result[0];
      DB.getActions(id).then(actions => {
        const project = Object.assign({}, result, { actions: actions });
        res.json({ project });
      });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
