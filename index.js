const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const server = express();
const port = 9000;

server.use(helmet());
server.use(express.json());

/* == Sanity Check == */
server.get('/', (req, res) => {
  res.send("You got this!!")
});


/* == Projects == */

server.get('/projects', (req, res) => {
  db('projects')
    .then(projects => {
      console.log(`\n== PROJECTS FOUND ==\n`, projects)
      res
        .status(200)
        .json(projects);
    })
    .catch(err => {
      console.log(`\n== CANNOT GET PROJECTS ==\n`, err)
      res
        .status(500)
        .json({ error: "The projects could not be retrieved." })
    });
})

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  db('projects')
    .where('id', id)
    .then(project => {
      if (!project.length) {
        console.log(`\n== PROJECT ID NOT FOUND ==\n`)
        res
          .status(401)
          .json({ error: "There is no project with the specified ID."});
        }
        db('actions')
          .where('project_id', id)
          .then(actions => {
            project[0].actions = actions;
            console.log(`\n== PROJECT FOUND ==\n`, project)
            res
              .status(200)
              .json(project)
          })
          .catch(err => {
            console.log(`\n== CANNOT GET PROJECT ==\n`, err)
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
    console.log(`\n== PROJECT NEEDS A NAME ==\n`)
    res
      .status(400)
      .json({ error: "Please add a name for this project."})
  }

  db.insert(project)
    .into('projects')
    .then(ids => {
      console.log(`\n== PROJECT ADDED ==\n`, project)
      res
        .status(201)
        .json(ids);
    })
    .catch(err => {
      console.log(`\n== CANNOT ADD PROJECT ==\n`, err)
      res
        .status(500)
        .json(err)
    });
});

server.put('/projects/:id', (req, res) => {
  const project = req.body;
  const { id } = req.params;

  db('projects')
    .where('id', id)
    .update(project)
    .then(update => {
      console.log(`\n== PROJECT UPDATED ==\n`, project)
      res
        .status(200)
        .json(update);
    })
    .catch(err => {
      console.log(`\n== CANNOT UPDATE PROJECT ==\n`, err)
      res
        .status(500)
        .json(err);
    })
})

/* == Actions == */

server.get('/actions', (req, res) => {
  db('actions')
    .then(actions => {
      res
      console.log(`\n== ACTIONS FOUND ==\n`)
        .status(200)
        .json(actions)
    })
    .catch(err => {
      console.log(`\n== CANNOT FIND ACTIONS ==\n`, err)
      res
        .status(500)
        .json(err)
    });
})

server.get('/actions/:id', (req, res) => {
  const { id } = req.params;

  db('actions')
    .where('id', id)
    .then(action => {
      if (!action.length) {
        res
        console.log(`\n== ACTION ID NOT FOUND ==\n`, err)
          .status(401)
          .json({ error: "There is no action with the specified ID." })
      }
        res
        console.log(`\n== ACTION FOUND ==\n`, err)
          .status(200)
          .json(action)
    })
    .catch(err => {
      res
      console.log(`\n== CANNOT FIND ACTION ==\n`, err)
        .status(500)
        .json({ error: "The action could not be retrieved." })
    })
})


server.post('/actions', (req, res) => {
  const action = req.body;

  db.insert(action)
    .into('actions')
    .then(ids => {
      console.log(`\n== ACTION ADDED ==\n`)
      res
        .status(201)
        .json(ids);
    })
    .catch(err => {
      console.log(`\n== CANNOT ADD ACTION ==\n`, err)
      res
        .status(500)
        .json(err)
      })
});


server.listen(port, () => console.log(`\n== API RUNNING ON ${port} ==\n`))
