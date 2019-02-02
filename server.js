const apiRouter = require('./api/index.js');
const express = require('express');
const server = express();
const PORT = 8080;

server.use(express.json());
server.use(apiRouter);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
