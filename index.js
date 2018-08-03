const express = require("express");
const db = require("./data/db");
const server = express();

// import routers
const projectsRouter = require("./routers/projects");
const actionsRouter = require("./routers/actions");

// use middleware
server.use(express.json());

// endpoints here
server.get("/", (req, res) => {
  res.send("Up and running");
});

// projects
server.use("/projects", projectsRouter);

// actions
server.use("/actions", actionsRouter);

// complete project
server.get("/complete_project/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const project = await db("projects").where("id", id);
    const actions = await db("actions").where("project_id", id);
    res.status(200).json({ ...project, actions: actions });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

const port = 8000;
server.listen(port, function() {
  console.log(`\n=== WEB API LISTENING ON HTTP://LOCALHOST:${port} ===\n`);
});
