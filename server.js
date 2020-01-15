//initial server script needing nodemon for dev mode 
const express = require('express');
const helmet = require('helmet');
const router = express.Router();
const projectRouter = require('./projects/projectRouter');
const resourceRouter = require('./resources/resourceRouter');
const taskRouter = require('./tasks/taskRouter.js');
const port = 5000;
const server = express();

server.use(helmet());
server.use(express.json());


//routes
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);
 
server.get("/", (req, res) => {
    res.send(`<h1> Server: started on port ${port}....</h2>`);
});



module.exports = server;
//new res needed for a landing page
