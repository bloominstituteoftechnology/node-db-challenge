// DEPENDENCIES
const express = require('express');
const helmet = require('helmet');

// SERVER
const server = express();

// MIDDLEWARE
server.use(express.json());
server.use(helemet());

// PORT
const port = 3400;
server.listen(port, () => console.log(` ==== LISTENING ON PORT ${port} ====`));