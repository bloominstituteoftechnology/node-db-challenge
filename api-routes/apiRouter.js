const express = require('express')

const projectRoutes = require('./routes/project-router.js')
const actionRoutes = require('./routes/action-router.js')

const api = express.Router();


api.use('/projects', projectRoutes);
api.use('/actions', actionRoutes);

module.exports = api;
