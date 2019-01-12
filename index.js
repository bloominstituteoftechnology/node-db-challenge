const express = require('express');
const server = express();

const projectRouter = require('./routers/projectsRouter');
const actionRouter = require('./routers/actionsRouter');
const PORT = 5050;

server.use(express.json());


server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);


server.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
})

