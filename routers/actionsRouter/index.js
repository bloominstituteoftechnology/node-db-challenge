const express = require("express");
const DB = require("../../data/helpers");
const router = express.Router();

// ADD A NEW ACTION TO A PROJECT
router.post("/:id/actions", (req, res) => {
  const { action } = req.body;
  const { id } = req.params;
  const newAction = Object.assign({}, action, { project_id: id });

  DB.addAction(newAction)
    .then(result => {
      res.status(201).json({ message: "New action was created." });
    })
    .catch(err => {
      res.status(500).json({ error: "error code: NOPOSAC" });
    });
});

module.exports = router;
