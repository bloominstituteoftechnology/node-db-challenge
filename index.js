const express = require('express');

const projectRouter = require('./routers/projectRouters');
const actionRouter = require('./routers/actionRouters');

const server = express();
const PORT = 5000;

server.use(express.json());
server.use('/project', projectRouter);
server.use('./action', actionRouter);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});