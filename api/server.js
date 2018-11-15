const express = require("express");
const middleware = require("./middleware/config");
const actionRouter = require("./routes/actionRoutes.js");
const projectRouter = require("./routes/projectRoutes.js");

//server
const server = express();

//middleware
middleware(server);

//routes
server.get("/", (req, res) => {
  res.status(200).json({
    message: "API is up and running. Go to /api/projects to view projects"
  });
});
server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

module.exports = server;
