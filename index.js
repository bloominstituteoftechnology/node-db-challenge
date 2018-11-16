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

server.use((err, req, res, next) => {
  switch (err.message) {
    case "ID_NOT_FOUND":
      return res
        .status(404)
        .json({ message: "The action with the specified id doesn't exist." });
    default:
      return res.status(500).json(err.message);
  }
});

const port = 8000;
server.listen(port, () =>
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
);
