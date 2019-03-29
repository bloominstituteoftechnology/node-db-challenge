const express = require('express');
const knex = require('knex');
const projectsRouter = require('./routes/projectsRouter');
const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/list.db3'
  },
  useNullAsDefault: true, // needed for sqlite
  migrations: {
    directory: './data/migrations'
  },
  useNullAsDefault: true // needed for sqlite
};

const db = knex(knexConfig);

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(201).json('API ONLINE');
});

const port = process.env.PORT || 5000;

server.use('/api/projects', projectsRouter);

server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
