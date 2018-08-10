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

module.exports = router;
