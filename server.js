// DEPENDENCIES
const express = require('express');
const helmet = require('helmet');

// DATA HELPERS

// SERVER
const server = express();

// MIDDLEWARE
server.use(express.json());
server.use(helmet());

// ENDPOINTS

// PORT
const port = 5000;
server.listen(port, function() {
	console.log(`\n=== LISTENING ON http://localhost:${port} ===\n`);
});
