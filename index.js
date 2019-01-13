const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const actionsRouter = require('./routers/actionsRouter.js');
const projectsRouter = require('./routers/projectsRouter.js');
const PORT = 4500;
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})