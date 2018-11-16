const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("./projects/projectsRouter");
const actionsRouter = require("./actions/actionsRouter");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => res.send("Welcome!"));

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

const port = 8000;
server.listen(port, () =>
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
);
