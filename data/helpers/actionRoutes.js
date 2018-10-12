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

module.exports = router;
