const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json());

// Endpoints Go Here

server.listen(8000, function() {console.log('API is running on 8000');});