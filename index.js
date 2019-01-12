const express = require('express');

const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');

const server = express();
const PORT = 5000;

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.send("API is active");
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});