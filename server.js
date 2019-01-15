const express = require("express");
const DB = require("./data/helpers/");
const projectsRouter = require("./routers/projectsRouter/");
const actionsRouter = require("./routers/actionsRouter/");
const SERVER = express();
const PORT = process.env.PORT || 3456;

SERVER.use(express.json());

SERVER.use("/api/projects", projectsRouter);
SERVER.use("/api/projects", actionsRouter);

SERVER.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
