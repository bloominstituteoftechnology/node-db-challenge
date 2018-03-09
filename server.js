const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).send({ api: 'API running' });
})



const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});