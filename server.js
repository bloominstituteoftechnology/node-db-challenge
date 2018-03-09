const express = require('express');
const bodyParser = require('body-parser');

const knex = require('./database/db.js');
const projectRouter = require('./projects/projectRouter.js');
const actionRouter = require('./actions/actionRouter.js');
const contextRouter = require('./contexts/contextRouter.js');

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use('/projects', projectRouter);
server.use('/actions', actionRouter);
server.use('/contexts', contextRouter);

server.get('/', (req, res) => {
  res.status(200).json({ Gandalf: 'You shall pass!' });
});

server.listen(port, () => {
  console.log('The Eye of Server watches you.')
});