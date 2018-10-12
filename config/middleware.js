const helmet = require('helmet');
const express = require('express');
const projectsRoutes = require('../routes/projectsRoutes.js');
const actionsRoutes = require('../routes/actionsRoutes.js');

module.exports = server=>{
    server.use(helmet());
    server.use(express.json());
    server.use('/api/projects', projectsRoutes);
    server.use('/api/actions', actionsRoutes);
}