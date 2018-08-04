const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

const helpers = require('./helpers/scripts');
const isNumber = helpers.isNumber;
const dbInsert = helpers.insert;
const checkExists = helpers.checkExists;
const getProjects = helpers.getProjects;
const addProject = helpers.addProject;
const getProject = helpers.getProject;

// endpoints here
//sanity route
server.get('/', (req, res) => {
  res.send('up and running...');
});

/////// actions /////////
//get
server.get('/actions', (req, res) => {
  db('actions')
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
});

//post
server.post('/actions', (req, res) => {
  const action = req.body;

  //check if action contains ref to project (either actual project id or just a name to create or find the project)
  if (!action.project_id) {
    //send an error back
    throw 'no project id or name included. Every action must correspond to a project';
  } else {
    console.log(action);
    const idObj = {};
    if (isNumber(action.project_id)) {
      //project id is a reference to projectDB id, project should already exist
      idObj['id'] = action.project_id;
      console.log('isInteger');
    } else {
      //projectId is not a number, it must be a name. search if exists, otherwise create it
      idObj['name'] = action.project_id;
      console.log('isName');
    }
    checkExists('projects', action.project_id)
      .then(project => {
        if (!project) {
          //project not found
          if (!isNumber(action.project_id)) {
            //create project using this string as its name
            dbInsert('projects', { name: action.project_id }).then(
              newProject => {
                //create action and ref this project id
                const newAction = {
                  name: action.name,
                  project_id: newProject.id
                };
                dbInsert('actions', newAction)
                  .then(insertedAction => {
                    res.status(201).json(insertedAction);
                  })
                  .catch(err => {
                    res.status(500).json(err);
                  });
              }
            );
          } else
            throw 'project not found, project_id needs to be a string if trying to create a new project while creating a new action';
        } else {
          //project was found, create project
          const newAction = { name: action.name, project_id: project.id };
          dbInsert('actions', newAction)
            .then(insertedAction => {
              res.status(201).json(insertedAction);
            })
            .catch(err => {
              res.status(500).json(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

//put
server.put('/actions/:id', (req, res) => {
  const { id } = req.params;

  db('actions')
    .where({ id })
    .then(count => {
      if (count) {
        // perform another query to get the modified record
        db('actions')
          .select('name')
          .where({ id })
          .then(action => {
            res.status(200).json(action);
          })
          .catch(err => {
            res.status(500).json(err);
          });
      } else {
        res.status(404).json({ message: 'The action was not found' });
      }
    })
    .catch(err => res.status(500).json(err));
});

//////// projects ////////

//retrieve 1 project and format return object with it's actions
server.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  getProject(id)
    .then(project => {
      if (project) {
        //project found
        console.log({ project: project });
        res.status(201).json(project);
      } else {
        //project not found
        res.status(404).json({ message: 'The project was not found' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get
server.get('/projects', (req, res) => {
  getProjects()
    .then(projects => {
      console.log(projects);
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

//post
server.post('/projects', (req, res) => {
  const project = req.body;
  //if actions are included, they should be an array of ids or names.
  addProject(project)
    .then(id => {
      console.log(id);
      res.status(201).json({ id: id });
    })
    .catch(err => res.status(500).json(err));
});

//put
server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  db('projects')
    .where({ id })
    .then(count => {
      if (count) {
        // perform another query to get the modified record
        db('projects')
          .select('name')
          .where({ id })
          .then(project => {
            res.status(200).json(project);
          })
          .catch(err => {
            res.status(500).json(err);
          });
      } else {
        res.status(404).json({ message: 'The project was not found' });
      }
    })
    .catch(err => res.status(500).json(err));
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
