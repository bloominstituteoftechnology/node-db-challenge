const express = require('express');
const server = express();
const knex = require('knex');
const configureMiddleware = require('../config/middleware.js');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

configureMiddleware(server);



const projectsRouter = require('../projects/projectsRouter.js')
const actionsRouter = require('../actions/actionsRouter.js')


server.use('/projects', projectsRouter)
// server.use('/actions', actionsRouter)
server.use('/projects/:id/actions', actionsRouter)




// server.get('/actions-of-projects/:id', (req, res) => {
//    
// })

server.get('/',  (req, res) => {
    res.send(`please type in /projects or /actions to see data`);
})



module.exports = server;