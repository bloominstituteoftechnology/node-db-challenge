const server = require('./config/middleware.js');
const actionRoutes = require('./routes/actionRoutes.js');
const projectRoutes = require('./routes/projectRoutes.js');

server.use('/actions', actionRoutes);
server.use('/projects', projectRoutes);