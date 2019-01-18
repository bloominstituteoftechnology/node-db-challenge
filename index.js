const express = require('express');
const middlewareConfig = require('./middleware/middlewareConfig.js');
const projectRoutes = require('./routes/projectRoutes.js');
const actionRoutes = require('./routes/actionRoutes.js');

 // Sets up server
const server = express();

 // Middleware
middlewareConfig(server);

 // Endpoints
server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

 // Sets server to listen on a port
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`=== Server listening on port ${PORT} ===`);
}); 