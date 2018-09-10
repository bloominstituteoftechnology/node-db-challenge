const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const dbConfig = require("./knexfile");

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.send("api running");
  });

server.post("/api/projects", (req, res) => {
  if (!req.body.name || !req.body.description) {
    res.status(400).json({ error: "need fields" });
  } else {
    db.insert(req.body)
      .into("projects")
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(err => res.status(500).json({ error: "error saving" }));
  }
});

const port = 8000;
server.listen(port, function() {{
    console.log(`\n =API on ${port}= \n`);
}});