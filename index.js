const express = require('express');
const server = express();

server.use(express.json());

const projectRoutes = require('./routes/projectRoutes');
const actionRoutes = require('./routes/actionRoutes');

server.use("/projects", projectRoutes);
server.use("/actions", actionRoutes);

const port = 8000;
server.listen(port, () => console.log(`=== Server is listening on port ${port} ===`))