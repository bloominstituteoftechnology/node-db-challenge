const express = require("express");
const server = express();

const projectRouter = require("./routes/projectRoutes");
const actionRouter = require("./routes/actionRoutes");

const knex = require("knex");
const dbConfig = require("./knexfile");
const db = knex(dbConfig.development);

const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use("/actions", actionRouter);
server.use("/projects", projectRouter);

server.get("/", (req, res) => {
    res.send("hello world")
});

//SERVER

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
