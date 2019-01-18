const express = require('express');

const server = express();

const port = 8000
server.listen(port, () => {
  console.log('Server Live, listening on port 8000');
});

module.exports = server;