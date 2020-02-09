const express = require("express");

const projectsRouter = require("./schemes/projects-router.js");
const resourcesRouter = require("./schemes/resources-router.js");
const tasksRouter = require("./schemes/tasks-router.js");

app = express();
app.use(express.json());

app.use("/api/projects", projectsRouter);
app.use("/api/resources", resourcesRouter);
app.use("/api/projects/:id/tasks", tasksRouter);

module.exports = app;
