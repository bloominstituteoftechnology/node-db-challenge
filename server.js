const express = require('express');
const helmet = require('helmet');

const projectRoutes = require('./projects/projectRoutes');
const actionRoutes = require('./actions/actionRoutes');

const server = express();

server.use(express.json());
server.use(helmet());


server.get('/', (req, res) => {
  res.send('API Running...');
});


server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);


server.listen(3333, () => console.log('Hello'));
