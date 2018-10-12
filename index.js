const express = require("express");
const helmet = require("helmet");
const projectRoutes = require("./data/helpers/projectRoutes");
const actionRoutes = require("./data/helpers/actionRoutes");
const server = express();

server.use(helmet());
server.use(express.json());

// sanity check endpoint
server.get("/", (req, res) => {
  res.send("Testing");
});

//Routes
server.use("/api/projects", projectRoutes);
server.use("/api/actions", actionRoutes);

server.listen(9000, () => console.log("\nAPI running on 9k\n"));
