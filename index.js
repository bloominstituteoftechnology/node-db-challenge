const express = require('express');
const applyGlobalMiddleware = require('./config/middleware/global.js');

const server = express();
const port = 5000;

// middleware
applyGlobalMiddleware(server);

// routes
server.get('/', (req, res) => {
	res.send('Server is working');
});

server.listen(port, () => { console.log(`\n=== Listening on port ${ port } ===`) });
