const express = require('express');

const projectsDB = require('./data/projectdbConfig.js');
const actionsDB = require('./data/actionsdbConfig.js');

const server = express();

server.use(express.json());


//server running GET
server.get('/', (req, res) => {
  res.json({ api: 'server 7777 up and running!' });
});

server.listen(7777, () => console.log('\n== Port 7(repeat 4 *) ==\n'));