const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

//endpoints
server.get('/', (red, res) => {
  res.send('Sanity check endpoint');
});

//Setting up listener
const PORT = 5432;
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
