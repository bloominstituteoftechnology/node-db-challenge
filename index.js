const express = require("express");
const server = express();

const helmet = require("helmet");
const morgan = require("morgan");

const projectRouter = require("./routers/projectRouter");
const actionRouter = require("./routers/actionRouter");

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

// endpoints here
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

const PORT = 3000;
server.listen(PORT, function() {
  console.log(`server is up and listening on port ${PORT}`);
});
