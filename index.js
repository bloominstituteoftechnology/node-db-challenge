const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const knex = require('knex');

dbConfig = require('./knexfile');

// require routes here
const projectsRoute = require('./routes/projects');
const actionsRoute = require('./routes/actions');

const app = express();
const db = knex(dbConfig.development);
const PORT = 8888;

app.use(express.json());
app.use(helmet());
app.use(logger('dev'));

// routes
app.use('/api/projects', projectsRoute);
app.use('/api/actions', actionsRoute);

app.get('/', (req, res) => {
  res.json({ message: 'app is running' });
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
