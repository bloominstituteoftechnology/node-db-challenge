const express = require("express");
const projectRoutes = require('./routes/projectRoutes.js');

const server = express();

server.use(express.json());

// Endpoints
server.use('/api/projects', projectRoutes);







const port = 8000;

server.listen(port, () => console.log(`\n== Port ${port} ==\n`));