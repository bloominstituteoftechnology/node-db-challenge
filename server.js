const express = require('express');
const bodyParser = require('body-parser');

const port = 3030;

const projectsEndpoint = require('./routes/projects/projectsEndpoint');
const actionsEndpoint = require('./routes/actions/actionsEndpoint');
const contextsEndpoint = require('./routes/contexts/contextsEndpoint');
const projectactionsEndpoint = require('./routes/projectactions/projectactionsEndpoint');
const projectcontextsEndpoint = require('./routes/projectcontexts/projectcontextsEndpoint');
const actioncontextsEndpoint = require('./routes/actioncontexts/actioncontextsEndpoint');

const server = express();

server.use(bodyParser.json());
server.use('/api/projects', projectsEndpoint);
server.use('/api/actions', actionsEndpoint);
server.use('/api/contexts', contextsEndpoint);
server.use('/api/projectactions', projectactionsEndpoint);
server.use('/api/projectcontexts', projectcontextsEndpoint);
server.use('/api/actioncontexts', actioncontextsEndpoint);

server.get('/', (req, res) => {
  res.json({ api: 'runn1ng . . .' });
});

/* FACTOR OUT LATER */
/* FACTOR OUT LATER */
const db = require('./database/db');
const knex = require('knex');
/* FACTOR OUT LATER */
/* FACTOR OUT LATER */

server.get('/project/:id', (req, res) => {
  const { id } = req.params;

  db('projects as p')
    .where({ id })
    .select(
      'p.id',
      'p.name',
      'p.description',
      knex.raw(
        `(case when p.completed = 1 then 'true' else 'false' end) as completed`,
      ),
    )
    .then(project => {
      db('projectactions as pa')
        .where({ projectId: id })
        .then(actions => {
          res.json(actions);
        })
        .catch(err => res.status(500).json(err));
    })
    .catch(err => res.status(500).json(err));
});

server.listen(process.env.PORT || port, _ => {
  console.log(`API running on ${port}`);
});
