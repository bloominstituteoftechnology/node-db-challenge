const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');

const knex = require('./database/db.js')

const projectRouter = require('./projects/projectRouter.js');
const contextRouter = require('./context/contextRouter.js');
const actionRouter  = require('./actions/actionsRouter.js');

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.get('/', (req, res) => {
  res.json({ api : 'cleared for liftoff'});
})

server.use('/projects', projectRouter);

server.listen(5000, () => console.log('we have ignition on port 5000'));
