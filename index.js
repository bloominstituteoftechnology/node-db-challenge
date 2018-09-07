const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

const projectRoutes = require('./Routes/projectRoutes');
const actionRoutes = require('./Routes/actionRoutes');

server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

//==============TESTING IF API IS RUNNING=============
server.get('/', (req, res) => {
    res.send('API Running...');
  });

const port = 5000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});