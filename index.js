const express = require("express");
const server = express();
const PORT = 9000;

const projectsRoute = require("./routes/projectsRoute");
const actionsRoute = require("./routes/actionsRoute");

server.use(express.json());
server.use("/api/projects", projectsRoute);
server.use("/api/actions", actionsRoute);

server.listen(PORT, () => console.log(`\n== PORT ${PORT} is Def Live ==\n`));
