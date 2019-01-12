const express = require("express");
const port = process.env.PORT || 4300;
const server = express();
const projectsRouter = require("./data/helpers/projects");

server.use(express.json());

//endpoints here
server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.send("This is the projects Server. It's Live!");
});

// Server Listening on Port 4300

server.listen(port, () => {
  console.log(`\n === WebAPI Listening on: ${port} ===\n`);
});
