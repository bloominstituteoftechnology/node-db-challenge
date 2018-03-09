const express = require('express');
const bodyParser = require('body-parser');

const port = 3030;

const projectsEndpoint = require('./routes/projects/projectsEndpoint');
const actionsEndpoint = require('./routes/actions/actionsEndpoint');
const contextsEndpoint = require('./routes/contexts/contextsEndpoint');
const projectactionsEndpoint = require('./routes/projectactions/projectactionsEndpoint');
const projectcontextsEndpoint = require('./routes/projectcontexts/projectcontextsEndpoint');

const server = express();

server.use(bodyParser.json());
server.use('/api/projects', projectsEndpoint);
server.use('/api/actions', actionsEndpoint);
server.use('/api/contexts', contextsEndpoint);
server.use('/api/projectactions', projectactionsEndpoint);
server.use('/api/projectcontexts', projectcontextsEndpoint);

server.get('/', (req, res) => {
  res.json({ api: 'runn1ng . . .' });
});

server.listen(process.env.PORT || port, _ => {
  console.log(`API running on ${port}`);
});
