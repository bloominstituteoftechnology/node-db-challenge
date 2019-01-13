const express = require("express");
const server = express();

const projectRouter = require("./Routers/projectRouter");
const actionRouter = require("./Routers/actionRouter");

const PORT = 4000;

server.use(express.json());

server.use("/projects", projectRouter);
server.use("/actions", actionRouter);

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
