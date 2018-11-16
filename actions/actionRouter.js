const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

// G E T   B Y   I D
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("actions")
    .where({ id: id })
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => res.status(500).json(err));
});

// P O S T
router.post("/", (req, res) => {
  const action = req.body;

  db("actions")
    .insert(action)
    .returning("id")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//                                  //
//  S T R E T C H   R O U T I N G //
//  ▼                        ▼ //

// G E T   A L L   A C T I O N S
router.get("/", (req, res) => {
  db("actions")
    .then(action => res.status(200).json(action))
    .catch(err => res.status(500).json(err));
});

// U P D A T E   A C T I O N S
router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("actions")
    .where({ id: id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err));
});

// D E L E T E   A C T I O N S
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db("actions")
    .where({ id: id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
