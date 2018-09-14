const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const dbConfig = require("./knexfile");
const db = knex(dbConfig.development);
const server = express();

server.use(express.json());
server.use(helmet());

//Test endpoint
server.get("/", (req, res) => {
  res.send("you made it!");
});

server.get("/projects", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ msg: err });
    });
});

const port = 8000;
server.listen(port, function() {
  console.log(`\n===> Web API Listening on http://localhost:${port} <===\n`);
});
