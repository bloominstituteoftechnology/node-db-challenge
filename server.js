const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).send("Welcome to Sprint-Challenge-RDBMS")
})

const port = 8000;
server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
  });