const express = require("express");
const projectsRouter = require("./Routers/projects-router");
const tasksRouter = require("./Routers/tasks-router");
const resourcesRouter = require("./Routers/resources-router");

const server = express();

server.use(express.json());
const port = process.env.PORT || 8000;

server.use("/projects", projectsRouter);
server.use("/tasks", tasksRouter);
server.use("/resources", resourcesRouter);

server.get("/", (req, res) => {
  res.status(200).send(`<h1>Aaron's Node DB Sprint Challenge</h1>`);
});

server.listen(port, () => {
  console.log(`Server initialized at http://localhost:${port}...`);
});
