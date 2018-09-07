const express = require('express');
const server = express();

server.use(express.json());

const projectRoutes = require('./routes/projectRoutes');

server.use("/projects", projectRoutes);

const port = 8000;
server.listen(port, () => console.log(`=== Server is listening on port ${port} ===`))