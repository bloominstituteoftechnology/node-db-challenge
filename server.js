const express = require('express');
const db = require('./data/db');
const server = express();

server.use(express.json());


server.get('/', (req, res) => {
  res.send('Hello World');
});

server.get('/projects', (req, res) => {
	db('Projects').then(projects=> {
		res.status(200).json(projects);
	}).catch(err => res.status(500).json(err));
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
