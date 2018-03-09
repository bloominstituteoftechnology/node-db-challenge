const express = require('express');
const bodyparser = require('body-parser');

// const projectsRouter = require('./Projects/projectRouter');
const actionsRouter = require('./Actions/actionsRouter');
const contextsRouter = require('./Contexts/contextsRouter');


const PORT = 3000;
const server = express();

server.use(bodyparser.json());

// server.use('/projects', projectsRouter);
server.use('/actions', actionsRouter);
server.use('/contexts', contextsRouter);


server.get('/', (req, res) => {
    res.status(200).json({ message: 'From its slumber, the server rises!' });
});



server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})