const express = require("express");
const helmet = require("helmet");
const allRoutes = require("./routes/allRoutes.js");
const server = express();

const knex = require("knex");
// const db = knex(knexConfig.development);
const knexConfig = require("./knexfile.js");

const port = 5000;

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => res.send("We are LIVE!"));
server.use("/api", allRoutes);

server.listen(port, () => console.log(`\nAPI running on ${port}\n`));
