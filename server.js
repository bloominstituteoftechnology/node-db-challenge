const express = require('express');
const bodyParser = require('body-parser');

const port = 3030;

const projectsEndpoint = require('./routes/projects/projectsEndpoint');
const actionsEndpoint = require('./routes/actions/actionsEndpoint');
const contextsEndpoint = require('./routes/contexts/contextsEndpoint');
const projectactioncontextsEndpoint = require('./routes/projectactioncontexts/projectactioncontextsEndpoint');

const projectactioncontexts = require('./routes/projectactioncontexts/projectactioncontextsController');
const resp = require('./routes/helpers/send');

const server = express();

server.use(bodyParser.json());
server.use('/api/projects', projectsEndpoint);
server.use('/api/actions', actionsEndpoint);
server.use('/api/contexts', contextsEndpoint);
server.use('/api/projectactioncontexts', projectactioncontextsEndpoint);

server.get('/', (req, res) => {
  res.json({ api: 'runn1ng . . .' });
});

server.get('/project/:id', (req, res) => {
  const { id } = req.params;

  const p0 = new Promise((resolve, reject) => {
    projectactioncontexts
      .requestProjectWith(id)
      .then(project => resolve(project))
      .catch(reason => reject(reason));
  });

  const p1 = new Promise((resolve, reject) => {
    projectactioncontexts
      .requestProjectWithContext(id)
      .then(contexts => resolve(contexts))
      .catch(reason => reject(reason));
  });

  const p2 = new Promise((resolve, reject) => {
    projectactioncontexts
      .requestActionsWithContext(id)
      .then(actions => resolve(actions))
      .catch(reason => reject(reason));
  });

  Promise.all([p0, p1, p2])
    .then(values => {
      const project = values[0];

      project.actions = values[2];
      project.contexts = values[1];

      res.status(200).json(project);
    })
    .catch(reason =>
      res.status(500).json({ msg: 'Server error retrieving project', reason }),
    );
});

server.listen(process.env.PORT || port, _ => {
  console.log(`API running on ${port}`);
});
