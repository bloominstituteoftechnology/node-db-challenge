const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('API running...')
  });

const port = 5000;
server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
})