const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile");

const server = express();
const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());

// GET //
server.get("/api/projects/:id", (req, res) => {
  const id = req.params.id;
  let projectResponse = {};
  if (!id) {
    res.status(400).json({ error: "Invalid request" });
  }
  db.findById(id)
    .then(result => {
      if (result) {
        projectResponse = result;
        db.getProjectActions(id)
          .then(actions => {
            projectResponse.actions = actions;
            res.status(200).json(projectResponse);
          })
          .catch(err =>
            res
              .status(500)
              .json({ error: "There was an error retrieving the project" })
          );
      } else
        res
          .status(500)
          .json({ error: "There was an error retrieving the project" });
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "There was an error retrieving the project" })
    );
});
/////////

// POST //
server.post("/api/projects", (req, res) => {
  const project = req.body;
  projects
     .addProject(project)
     .then(ids => {
         res.status(201).json(ids[0]);
     })
     .catch(err => {
         res.status(500).json(err);
     });
});

server.post("/api/actions", (req, res) => {
  const action = req.body;
  actions
      .addAction(action)
      .then(ids => {
          res.status(201).json(ids[0]);
      })
      .catch(err => {
          res.status(500).json(err);
      });
});


///////////////////

// server listener
server.listen(5000, () => console.log(`Server listening to port 5000`));