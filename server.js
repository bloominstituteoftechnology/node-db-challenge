const express = require('express');
const bodyParser = require('body-parser');

const port = 3030;

const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.json({ api: 'runn1ng . . .' });
});

server.listen(process.env.PORT || port, _ => {
  console.log(`API running on ${port}`);
});
