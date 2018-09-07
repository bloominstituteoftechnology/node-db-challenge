const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const dbConfig = require("./knexfile");

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("API Running..");
});

// start get
server.get("/api/projects", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: "The projects could not be retrieved." });
    });
});

server.get("/api/actions", (req, res) => {
  db("actions")
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ error: "The actions could not be retrieved." });
    });
});

server.get("/api/actions/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where({ action_id: id })
    .then(action => {
      if (action.length === 0) {
        res.status(404).json({
          message: "The action with the specified ID does not exist.",
        });
      } else {
        return res.status(200).json(action);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "The action could not be retrieved." });
    });
});

server.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ project_id: id })
    .then(project => {
      if (project.length === 0) {
        res.status(404).json({
          message: "The project with the specified ID does not exist.",
        });
      } else {
        return res.status(200).json(project);
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The project could not be retrieved." });
    });
});

server.listen(7250, () => console.log("\n== API on port 7250 ==\n"));
