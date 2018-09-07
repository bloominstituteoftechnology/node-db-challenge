const express = require("express");
const server = express();
const actionRoutes = require('./routes/actionRoutes');
const projectRoutes = require('./routes/projectRoutes');

server.use(express.json());
server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);

server.listen(4000, () =>
  console.log("\n~~~~~~ Listening on port 4000 ~~~~~~\n")
);
