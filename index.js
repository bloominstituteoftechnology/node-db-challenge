const express = require("express");
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

const port = 8000;
server.listen(port, function() {
  console.log(`\n=== WEB API LISTENING ON HTTP://LOCALHOST:${port} ===\n`);
});
