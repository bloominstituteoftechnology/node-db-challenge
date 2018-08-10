const express = require("express");
const router = express.Router();
const db = require("../data/db");

router.get("/", (req, res) => {
  db("actions")
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

//* GET with id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("actions")
    .select() //! <------ Knex SELECT
    .where("id", id) //! <----- WHERE id =
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

//* POST to Actions
router.post("/", (req, res) => {
  const action = req.body;

  db.insert(action)
    .into("actions")
    .then(ids => {
      const id = ids[0];
      res.status(201).json({ id, ...action });
    })
    .catch(err => res.status(500).json(err));
});

// DELETE  action by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where("id", id)
    .del()
    .then(response => {
      if (!response) {
        res
          .status(404)
          .json({ response, message: `Action ${id} doesn't exist.` });
        return;
      }
      res
        .status(200)
        .json({ response, message: `Action ${id} has been deleted.` });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
