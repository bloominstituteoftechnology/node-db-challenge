const   express = require('express'),
        helmet = require('helmet'),
        morgan = require('morgan'),
        Router = require('../router/routers.js');
        

module.exports = (server) =>{
    server.use(
        express.json(),
        helmet(),
        morgan('dev')
    );
    server.use('/api/projects', Router.routerProjects);
    server.use('/api/actions', Router.routerProjects);
    
}
