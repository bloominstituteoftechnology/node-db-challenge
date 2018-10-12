const express = require('express');

const cors = require('cors');

const helmet = require('helmet');

const logger = require('morgan');


// const zoosRoutes = require('./zoos/zoosRoutes');

const server = express();

////// ++++++++MIDDLEWARE +++++++//////////

server.use(
    express.json(),
    logger(":method :url :status :response-time ms"),
    helmet()
    );

////////////+++Project Routes++++/////////////////////////////

server.get('/', (req, res) => {
    res.send("Heyo");
  });
  
//   server.use('/api/projects', projectsRoutes);
  
  const port = 7300;
  server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
  });
  