const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const server = express();
server.use(bodyParser.json());

server.listen(port, () => `Server listening on port ${port}`);