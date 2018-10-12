// endpoints go here

const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());




server.get('/', (req, res) => {
  res.send('HmmmmMMmmMmMmmMm.... am I actually working though?');
})




const port = 4404;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});



server.get('/api/projects', (req, res) => {
  db('projects')
    .then(projects => {

      if (!projects || projects.length < 1) {
        res.status(404).json({ missingError: 'Hmm... It Seems All the Projects are on Vacation! Come back soon or try again!' });
      } else {
        res.status(200).json(projects);
      }
  
    })
    .catch(err => res.status(500).json(err));    
});


server.get('/api/actions', (req, res) => {
  db('actions')
    .then(actions => {

      if (!actions || actions.length < 1) {
        res.status(404).json({ missingError: 'Hmm... It Seems All the Actions are on Vacation! Come back soon or try again!' });
      } else {
        res.status(200).json(actions);
      }
    })
    .catch(err => res.status(500).json(err));
});

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;

  db('projects').where({ id }).first()
    .then(project => {     

      if (!project) {
        res.status(404).json({ missingError: 'Hmm... It Seems the project is on Vacation! Come back soon or try again!' });
      } else {
        res.status(200).json(project);
      }


    })
    .catch(err => res.status(500).json(err));
});