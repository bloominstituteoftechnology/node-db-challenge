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

// start POST
server.post("/api/actions", (req, res) => {
  const action = req.body;
  if (!action) {
    return res.status(406).json({
      errorMessage: "Please provide a name for the action.",
    });
  } else {
    db("actions")
      .insert(action)
      .into("actions")
      .then(actions => {
        res.status(201).json({ message: "Action successfully added." });
      })
      .catch(err => {
        res.status(500).json({ error: "The action could not be added." });
      });
  }
});
// end POST

// start DELETE
server.delete("/api/actions/:id", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where("action_id", id)
    .del()
    .then(actions => {
      if (actions === 0) {
        res.status(404).json({
          message: "The action with the specified ID does not exist.",
        });
      } else {
        res.status(200).json({ message: "Action removed successfully." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The action could not be removed." });
    });
});
// end DELETE

// start PUT
server.put("/api/actions/:id", (req, res) => {
  const { id } = req.params;
  const modifiedAction = req.body;
  if (!modifiedAction) {
    return res.status(406).json({
      errorMessage: "Please provide a name for the action.",
    });
  } else {
    db("actions")
      .where("action_id", id)
      .update({
        action_description: modifiedAction.action_description,
        action_notes: modifiedAction.action_notes,
        action_completed: modifiedAction.action_completed,
      })
      .then(actions => {
        res.status(200).json({ message: "Action successfully modified." });
      })
      .catch(err => {
        console.log("PUT ERROR", err);
        res.status(500).json({ error: "The action could not be updated." });
      });
  }
});
// end PUT
// end actions

// nested end point
server.get("/api/projects/:id/actions", (req, res) => {
  const { id } = req.params;
  // db("projects")
  // db actions for attempt 3 & 4
  // db("actions", "projects");
  // attempt 1
  // .select("*")
  // .from("projects as p", "actions as a")
  // .join("actions as a", "a.project_id", "=", "p.project_id")
  // .where("a.project_id", id)
  // .options({ nestedTables: true })

  // attempt 2
  // .select("*")
  // .from("projects")
  // .join("actions", function() {
  //   this.on(function() {
  //     this.on("actions.project_id", "=", "projects.project_id");
  //   });
  // })
  // .where("actions.project_id", id)

  // attempt 3
  // .join("projects", "projects.project_id", "actions.project_id")
  // .select(
  //   "actions.action_id",
  //   "actions.action_description",
  //   "projects.project_name as postedBy",
  // )
  // .where("actions.project_id", id)

  // attempt 4
  // .join("projects", function() {
  //   this.on(function() {
  //     this.on("actions.project_id", "=", "projects.project_id");
  //   });
  // })
  // works same as join above
  // .join("projects", { "projects.project_id": "actions.project_id" })
  // .select("*")
  // .where("actions.project_id", id)
  // attempt 5
  db("projects")
    .where({ project_id: id })
    .then(project => {
      if (project.length === 0) {
        res.status(404).json({
          message: "The project with the specified ID does not exist.",
        });
      } else {
        db("actions")
          .where({ project_id: id })
          .then(action => {
            if (action.length === 0) {
              res.status(404).json({
                message: "The action with the specified ID does not exist.",
              });
            } else {
              // return res.status(200).json({ project, actions: { action } });
              return res
                .status(200)
                .json(Object.assign(project[0], { actions: action }));
            }
          })
          .catch(err => {
            console.log(err);
            res
              .status(500)
              .json({ error: "The action could not be retrieved." });
          });
      }
    });

  // working then and catch below
  // .then(project => {
  //   console.log("INDEX", project);
  //   if (project.length === 0) {
  //     res.status(404).json({
  //       message: "The project with the specified ID does not exist.",
  //     });
  //   } else {
  //     return res.status(200).json(project);
  //   }
  // })
  // .catch(err => {
  //   console.log("GET ALL PROJECTS ERR", err);
  //   res
  //     .status(500)
  //     .json({ error: "The project information could not be retrieved." });
  // });
});
// end last end point

server.listen(7250, () => console.log("\n== API on port 7250 ==\n"));
