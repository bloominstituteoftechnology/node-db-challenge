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

// start projects
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
// end gets

// start POST
server.post("/api/projects", (req, res) => {
  const project = req.body;
  if (!project) {
    return res.status(406).json({
      errorMessage: "Please provide a name for the project.",
    });
  } else {
    db("projects")
      .insert(project)
      .into("projects")
      .then(projects => {
        res.status(201).json({ message: "Project successfully added." });
      })
      .catch(err => {
        res.status(500).json({ error: "The project could not be added." });
      });
  }
});
// end POST

// start DELETE
server.delete("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where("project_id", id)
    .del()
    .then(projects => {
      if (projects === 0) {
        res.status(404).json({
          message: "The project with the specified ID does not exist.",
        });
      } else {
        res.status(200).json({ message: "Project removed successfully." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The project could not be removed." });
    });
});
// end DELETE

// start PUT
server.put("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  const modifiedProject = req.body;
  if (!modifiedProject) {
    return res.status(406).json({
      errorMessage: "Please provide a name for the project.",
    });
  } else {
    db("projects")
      .where("project_id", id)
      .update({
        project_name: modifiedProject.project_name,
        project_description: modifiedProject.project_description,
        project_completed: modifiedProject.project_completed,
      })
      .then(projects => {
        res.status(200).json({ message: "Project successfully modified." });
      })
      .catch(err => {
        console.log("PUT ERROR", err);
        res.status(500).json({ error: "The project could not be updated." });
      });
  }
});
// end PUT
// end projects

// start actions
//gets

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
// end gets

server.listen(7250, () => console.log("\n== API on port 7250 ==\n"));
