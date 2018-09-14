const express = require("express");
const helmet = require("helmet");

const actionRoutes = require("../routes/actionRoutes.js");
const projectRoutes = require("../routes/projectRoutes.js");

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  
  //route paths
  server.use("/api/actions", actionRoutes);
  server.use("/api/projects", projectRoutes);
};