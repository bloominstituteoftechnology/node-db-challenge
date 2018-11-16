const server = require('./api/server.js');
const projectsRouter = require('./projects/projectsRouter.js');
// const actionsRouter = require('./actions/actionsRouter');

const port = 9000;
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));

// PROJECTS METHODS
// server.use('/api/projects/', projectsRouter);
// server.get('/api/projects/:id', projectsRouter);
// server.get('/api/projects/actions/:id', projectsRouter);
server.post('/api/projects', projectsRouter);
// server.delete('/api/projects/:id', projectsRouter);
// server.put('/api/projects/:id', projectsRouter);

// ACTIONS METHODS
// server.use('/api/actions/', actionsRouter);
// server.get('/api/actions/:id', actionsRouter);
// server.post('/api/actions/', actionsRouter);
// server.delete('/api/actions/:id', actionsRouter);
// server.put('/api/actions/:id', actionsRouter);
