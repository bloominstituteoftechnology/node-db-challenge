const server = require('./server.js');
const actions = require('./routes/actions.js');
const projects = require('./routes/projectRoutes.js');

server.use('/actions', actions);
server.use('/projects', projects);