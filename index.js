const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');

const ActionRoutes = require('./routes/ActionRoutes');
const ProjectRoutes = require('./routes/ProjectRoutes');

const server = express();
const db = knex(dbConfig.development);

server.use('/api/projects', ProjectRoutes);
server.use('/api/actions', ActionRoutes);

server.listen(8000, () => {
  console.log('== LISTENING ON PORT 8000 ==');
})
