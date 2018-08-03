const express = require('express');
const db = require('./data/db.js');
const server = express();

const projectRoutes = require('./routes/projectRoutes');
const actionRoutes = require('./routes/actionRoutes');

server.use(express.json());

server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);
server.use('/', (req, res) => res.send('API up and running!'));

const port = 8000;
server.listen(port, function() {
 console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
