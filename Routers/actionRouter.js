const express = require("express");
const router = express.Router();
const actionDB = require("../data/helpers/actionHelpers");

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

router.get("/", (req, res) => {
  actionDB
    .getAll()
    .then(actions => {
      res.json(actions);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;
  actionDB
    .update(id, update)
    .then(response => {
      res.json({ message: `action with id ${response} has been updated.` });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  actionDB
    .remove(id)
    .then(count => {
      res.json({ message: `${count} record has been deleted.` });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
