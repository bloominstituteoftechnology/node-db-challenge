const express = require("express");
const router = express.Router();
const actionDB = require("../data/helpers/actionHelpers");
const projectDB = require("../data/helpers/projectHelpers");

//POST add actions
router.post("/", (req, res) => {
  const newAction = req.body;
  actionDB
    .insert(newAction)
    .then(id => {
      res.json({ message: `new action created with id ${id}` });
    })
    .catch(err => {
      if (err.code === "SQLITE_CONSTRAINT") {
        res.status(400).json({
          message: "action description and project id are required fields"
        });
      } else {
        res.status(500).json({ message: "could not create action" });
      }
    });
});

module.exports = router;
