const helmet = require("helmet");
const express = require("express");
const projectsRouters = require("../routes/projectsRouters.js");
const actionsRouters = require("../routes/actionsRouters.js");

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use("/api/projects", projectsRouters);
  server.use("/api/actions", actionsRouters);
};
