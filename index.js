const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan('short'));

const projectRoute = require('./routes/projectRoute');
const actionRoute = require('./routes/actionRoute');

server.use('/projects', projectRoute);
server.use('/actions', actionRoute);

//sanity check endpoint

server.get('/', (req, res) => {
  res.send('it lives'); 
})
const port = 3300;
server.listen(port, () => console.log('it lives on ', port));
