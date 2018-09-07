const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const dbConfig = require("./knexfile");

const db = knex(dbConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

//custom middleware

function checkForResource(req, res, resource) {
  if (resource.length > 0) {
    res.status(200).json(resource);
  } else {
    res
      .status(404)
      .json({ message: "The resource does not exist or is currently empty." });
  }
}

// endpoints here

server.get("/", (req, res) => {
  res.send("API running....");
});

//PROJECTS ENDPOINTS

server.get("/api/projects", (req, res) => {
  db("projects")
    .then(projects => {
      checkForResource(req, res, projects);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The projects information could not be retrieved." });
    });
});

server.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ id })
    .then(project => {
      checkForResource(req, res, project);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The project information could not be retrieved" });
    });
});

server.get("/api/projects/:id/actions", (req, res) => {
  const { id } = req.params;
  db("actions")
    .join("projects", "projects.id", "actions.project_id")
    .select("actions.id", "actions.name", "projects.name as project")
    .where("actions.project_id", id)
    .then(actions => {
      checkForResource(req, res, actions);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The actions information could not be retrieved." });
    });
});

server.post("/api/projects", (req, res) => {
  const project = req.body;

  db.insert(project)
    .into("projects")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({
        error: "There was an error saving the project to the database."
      });
    });
});

server.put("/api/projects/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("actions")
    .where({ id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The project information could not be updated" });
    });
});

server.delete("/api/projects/:id", (req, res) => {
  const { id } = req.params;

  db("projects")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({ error: "The project could not be deleted" });
    });
});

//ACTIONS ENDPOINTS

server.get("/api/actions", (req, res) => {
  db("actions")
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The actions information could not be retrieved" });
    });
});

server.get("/api/actions/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .join("projects", "projects.id", "actions.project_id")
    .select("actions.id", "actions.name", "projects.name as project")
    .where("actions.id", id)
    .then(action => {
      checkForResource(req, res, action);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The action information could not be retrieved" });
    });
});

server.post("/api/actions", (req, res) => {
  const action = req.body;

  db.insert(action)
    .into("actions")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({
        error: "There was an error saving the action to the database."
      });
    });
});

server.put("/api/actions/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("actions")
    .where({ id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The action information could not be updated" });
    });
});

server.delete("/api/actions/:id", (req, res) => {
  const { id } = req.params;

  db("actions")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({ error: "The action could not be deleted" });
    });
});

const port = 7000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
