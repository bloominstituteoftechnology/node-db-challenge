// Base requirements
const express = require('express');
//const knex = require('knex');

// Server requirements
const server = express();
const dbConfig = require('./knexfile');
//const db = knex(dbConfig.development);
const PORT = 5454;

// Middleware requirements
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// Route requires
const projRouter = require('./routes/projRouter');
const actsRouter = require('./routes/actRouter');


/* ---------- Middleware ---------- */
server.use(
  express.json(),
  morgan('dev'),
  helmet(),
  cors()
);


/* ---------- Endpoints ---------- */
server.use('/api/projects', projRouter);
server.use('/api/actions', actsRouter);


/* ---------- Listener ---------- */
server.listen( PORT, () => {
  console.log(`\n=== Web API listening on http://localhost:${PORT} ===\n`);
});