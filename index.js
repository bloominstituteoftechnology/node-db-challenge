const express = require("express");
const server = express();
const knex = require("knex");
const knexConfig = require("./knexfile");

const db = knex(knexConfig.development);

server.use(express.json());

const projectRouter = require("./projects/projectRouter");
const actionRouter = require("./actions/actionRouter");

// R O O T
server.get("/", (req, res) => {
  res.send("API root landing.");
});

// R O U T E S
server.use("/api/projects", projectRouter);
// server.use("/api/actions", actionRouter);

const port = 9000;
server.listen(port, () => console.log(`API running on port ${port}`));
