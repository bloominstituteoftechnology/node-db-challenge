const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');
const contextRouter = require('./routers/contextRouter');

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).send({ api: 'API running' });
})

server.use('/projects', projectRouter);
server.use('/actions', actionRouter);
server.use('/contexts', contextRouter);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});