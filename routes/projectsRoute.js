const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

router.post("/", (req, res) => {
  db("projects")
    .insert(req.body)
    .then(id => res.status(200).json(id))
    .catch(err => res.status(500).json(err));
});

router.get("/", (req, res) => {
  db("projects")
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

router.get("/:id", async (req, res) => {
  const {id} = req.params;

  const query1 = await db("projects").where({id});
  const query2 = await db("actions as a").where("a.project_id", id);
  //   console.log("query 1", query1);
  //   console.log("query 2", query2);

  const response = {
    ...query1[0],
    actions: query2
  };

  //   console.log(response);

  db("projects")
    .where({id})
    .then(projects => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
