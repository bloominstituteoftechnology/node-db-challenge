const express = require('express');
const helmet = require('helmet');
const port = 7007;

const server = express();

server.use(express.json(), helmet());


server.listen(port, () => console.log(`===API running ${port} port===\n`))