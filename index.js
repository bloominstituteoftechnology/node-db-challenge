const express = require('express');
const morgan = require('morgan');

const server = express();
const mw = require('./middleware');

server.use(express.json());
server.use(morgan('dev'));

server.use(mw.errorHandler);

server.get('/', (req, res) => {
  res.send('It works mon');
});

const port = 4000;
server.listen(process.env.PORT || port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} mon ===\n`);
});
