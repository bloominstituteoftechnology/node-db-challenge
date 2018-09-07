const express = require('express');
const projectRoutes = require('./routes/projects/projectRoutes.js');
const actionRoutes = require('./routes/actions/actionRoutes.js');


const server = express();

server.get('/', (req, res) => {
    res.send('API running...')
  });

server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

const port = 5000;
server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
})