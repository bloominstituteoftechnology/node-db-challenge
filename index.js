const server = require('./server.js');
const actionRoutes = require('./routes/actions.js');
const projectRoutes = require('./routes/projectRoutes.js');

server.use('/actions', actionRoutes);
server.use('/projects', projectRoutes);