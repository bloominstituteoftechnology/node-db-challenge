const express = require("express");

const actions = require("./actionModel.js");

const router = express.Router();

// get a list of actions
router.get("/", (req, res) => {
  actions
    .find()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

//create projects
router.post("/", (req, res) => {
  const action = req.body;

  actions
    .addProject(action)
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
