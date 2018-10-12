const express = require('express');
const helmet = require('helmet');
const port = 9000;

const server = express();

server.use(helmet(), express.json());

server.get('/', (req, res) => {
  res.json('hi');
});

server.listen(port, () => console.log(`\n--- Server running on port ${port} ---\n`));