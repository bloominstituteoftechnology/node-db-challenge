// Imports
const express = require('express');
const helmet = require('helmet');

// Creating server
const server = express();
server.use(express.json());
server.use(helmet());

// API Status at Root
server.get('/', (req, res) => res.send({API: "live"}));



// Dynamic Port
const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`))