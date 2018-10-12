const express = require("express");
const router = express.Router();
const db = require("../data/helper/actionsHelpers");

router.post("/", (req, res) => {
  const { description, notes, completed, project_id } = req.body;
  const action = { description, notes, completed, project_id };
  db.addAction(action)
    .then(c => res.status(201).json(c))
    .catch(err => res.status(500).json(err));
});

router.get('/', (req, res) => {
  db.getActions()
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
