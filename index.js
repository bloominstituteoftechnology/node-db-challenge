// Import node modules
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');

const server = express();// creates the server

// Add GLOBAL MIDDLEWARE
server.use(express.json());// formatting our req.body obj
server.use(logger ('combined'));// combined or tiny
server.use(helmet());

//ROUTES

//Add home route
server.get('/', (req, res) => {
  res.send('<h1>Here we go!</h1>');
});



// Name port
const port = 2000;

// Call server.listen w/ a port of 2000
server.listen(port, () =>
  console.log(`\n=== API running on port ${port} ===\n`)
);