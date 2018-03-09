const express = require('express');
const bodyParser = require('body-parser');

const port = 3030;

const projectsEndpoint = require('./routes/projects/projectsEndpoint');

const server = express();

server.use(bodyParser.json());
server.use('/api/projects', projectsEndpoint);

server.get('/', (req, res) => {
  res.json({ api: 'runn1ng . . .' });
});

server.listen(process.env.PORT || port, _ => {
  console.log(`API running on ${port}`);
});
