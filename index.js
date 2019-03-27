const express = require("express");
const port = process.env.PORT || 4300;
const server = express();
const projectsRouter = require("./data/helpers/projects");
const actionsRouter = require("./data/helpers/actions");

server.use(express.json());

//endpoints here
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.send("Up and runnin");
});

// Server Listening on Port 4300

server.listen(port, () => {
  console.log(`\n === WebAPI Listening on: ${port} ===\n`);
});
