const express = require('express');
const port = process.env.PORT || 9000;
const server = express();
const cors = require('cors');
const actionRoutes = require('./db/Routes/actionRoutes');
const projectRoutes = require('./db/Routes/projectRoutes');

server.use(express.json());
server.use(cors());
server.use('/actions', actionRoutes);
server.use('/projects', projectRoutes);

server.listen(port, () => {
  console.log(`\n === Server Listening on Port ${port} === \n`);
});
