const express = require("express");
const helmet = require("helmet");
const actionsRoutes = require("./actionsRoutes/actionsRoutes.js");
const projectsRoutes = require("./projectsRoutes/projectsRoutes.js");
const server = express();

const port = 5000;

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => res.send("We are LIVE!"));
server.use("/actions", actionsRoutes);
server.use("/projects", projectsRoutes);

server.listen(port, () => console.log(`\nAPI running on ${port}\n`));
