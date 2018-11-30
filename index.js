const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile.js");
const db = knex(knexConfig.development);
const server = express();

server.use(express.json());


// GET ALL PROJECTS //

server.get("/api/projects", (req, res) => {
  db("projects")
  .then(projects => res.status(200).json(projects))
  .catch(err => res.status(500).json(err));
});



server.listen(3000, () => console.log("\n=== Server running on port 3K ===\n"));