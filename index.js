const express = require('express');
const helmet = require('helmet');

const pjtsRts = require('./pjts/pjtsRts');
const atnsRts = require('./atns/atnsRts');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/pjts', pjtsRts);
server.use('/api/atns', atnsRts);

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});