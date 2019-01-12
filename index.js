const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const knex = require('knex');

// dbConfig = require('./knexfile');

// require routes here


const app = express();
// const db = knex(dbConfig.development);
const PORT = 8888;

app.use(express.json());
app.use(helmet());
app.use(logger('dev'));

// routes


app.get('/', (req, res) => {
  res.json({ message: 'app is running' });
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
