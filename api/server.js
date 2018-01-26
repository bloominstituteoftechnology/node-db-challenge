const PORT = 3000;

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes.js');

const server = express();

// MiddleWare
server.use(bodyParser.json());

// Routes
routes(server);

server.listen(PORT, function() {
  console.log(`API Server running on http://localhost:${ PORT }`);
});
