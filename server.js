const express = require('express');
const port = 5555;
const server = express();
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'))
server.use(cors())

const projectsRoutes = require('./Routes/projectsRoutes')
const actionsRoutes = require('./Routes/actionsRoutes')

server.use('/projects', projectsRoutes)
server.use('/actions', actionsRoutes)


server.listen(port, () => console.log(`server running on port 5555`));