const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

// G E T   B Y   I D
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("projects")
    .where({ id: id })
    .first()
    .then(project => {
      if (project) {
        db("actions")
          .where({ project_id: id })
          .then(actions => {
            project.actions = actions;
            res.status(200).json(project);
          })
          .catch(err => res.status(500).json(err));
      }
    });
});

// P O S T
router.post("/", (req, res) => {
  const project = req.body;

  db("projects")
    .insert(project)
    .returning("id")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//                                 //
//  S T R E T C H   R O U T I N G //
//  ▼                        ▼ //

// G E T   A L L   P R O J E C T S
router.get("/", (req, res) => {
  db("projects")
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(err));
});

// U P D A T E   P R O J E C T
router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("projects")
    .where({ id: id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err));
});

// D E L E T E   P R O J E C T
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db("projects")
    .where({ id: id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
