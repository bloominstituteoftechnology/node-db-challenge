const express = require("express");
const helmet = require("helmet");
const actionsRoutes = require("./actionRoutes/actionsRoutes.js");
const projectsRoutes = require("./projectRoutes/projectsRoutes.js");
const server = express();

const port = 5000;

server.use(helmet());
server.use(express.json());

server.get("/api", (req, res) => res.send("We are LIVE!"));
server.use("/api/actions", actionsRoutes);
server.use("/api/projects", projectsRoutes);

server.listen(port, () => console.log(`\nAPI running on ${port}\n`));
