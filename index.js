const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const server = express();
const port = 9000;

server.use(helmet());
server.use(express.json());

// sanity check
server.get('/', (req, res) => {
  res.send("You got this")
});


/* ===== Projects ===== */

server.get('/projects', (req, res) => {
  db('projects')
    .then(projects => {
      res
        .status(200)
        .json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json(err)
    });
})

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  db('projects')
    .where('id', id)
    .then(project => {
      if (!project.length) {
        res
          .status(401)
          .json({ error: "There is no project with the specified ID."});
        }
        db('actions')
          .where('project_id', id)
          .then(actions => {
            project[0].actions = actions;
            res
              .status(200)
              .json(project)
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: "The project could not be retrieved."})
          })
    })
})

server.post('/projects', (req, res) => {
  const project = req.body;
  const { name } = req.body;
  if (!name) {
    res
      .status(400)
      .json({ error: "Please add a name for this project."})
  }

  db.insert(project)
    .into('projects')
    .then(ids => {
      res
        .status(201)
        .json(ids);
    })
    .catch(err => {
      res
        .status(500)
        .json(err)
    });
});

server.listen(port, () => console.log(`\n== API RUNNING ON ${port} ==\n`))


/* ===== Actions ===== */

server.get('/actions', (req, res) => {
  db('actions')
    .then(actions => {
      res
        .status(200)
        .json(actions)
    })
    .catch(err => {
      res
        .status(500)
        .json(err)
    });
})

server.post('/actions', (req, res) => {
  const action = req.body;

  db.insert(action)
    .into('actions')
    .then(ids => {
      res
        .status(201)
        .json(ids);
    })
    .catch(err => {
      res
        .status(500)
        .json(err)
      })
});