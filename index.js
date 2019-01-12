const express = require('express');
const server = express();

const projectRouter = require('./routes/projectRoutes');
const actionRouter = require('./routes/actionRoutes');

const PORT = process.env.PORT || 3500;

server.use(express.json());


server.use('/projects', projectRouter);
server.use('/actions', actionRouter);

//SERVER

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});