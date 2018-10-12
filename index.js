const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile.js');

const projectDb = knex(knexConfig.development);
const server = express();
server.use(helmet());
server.use(express.json());

const port = 8000;
server.listen(port, () => console.log(`API running on port ${port}`));

// checker endpoint
server.get('/', (request, response) => {
    response.send('Server initialized.');
});

// project endpoints
server.get('/api/projects', (request, response) => {
    projectDb('projects')
      .then(projects => {
        return response
          .status(200)
          .json(projects);
      })
      .catch(() => {
        return response
          .status(500)
          .json({ Error: "Could not find list of projects." })
      });
});

server.get('/api/projects/:id', (request, response) => {
    const id = request.params.id;
  
    if (!{ id }) {
      return response
        .status(404)
        .json({ Error: "Could not find project." })
    } 
  
    projectDb('projects')
      .where({ id })
      .then(project => {
        return response
          .status(200)
          .json(project);
      })
      .catch(() => {
        return response
          .status(500)
          .json({ Error: "Project info could not be retrieved." })
      });
  });

// server.post('/api/projects', (request, response) => {
//     const newProject = request.body;
//     console.log(newProject);

//     if (!newProject.name) {
//         return response
//             .status(400)
//             .send({ Error: "Missing name for the project" });
//     }

//     projectDb('projects')
//         .insert(newProject)
//         .into('projects')
//         .then(ids => {
//             console.log("Getting to then: ", project);
//             return response
//                 .status(201)
//                 .json(ids[0]);
//         })
//         .catch(() => {
//             return response
//                 .status(500)
//                 .json({ Error: "There was an error while saving the project" })
//     });
// });

// action endpoints
// server.post('/api/actions', (request, response) => {
//     const newAction = request.body;

//     if (!newAction.name) {
//         return response
//             .status(400)
//             .send({ Error: "Missing name for the action" });
//     }

//     projectDb
//         .insert(newAction)
//         .into('actions')
//         .then(ids => {
//             return response
//                 .status(201)
//                 .json(ids[0]);
//         })
//         .catch(() => {
//             return response
//                 .status(500)
//                 .json({ Error: "There was an error while saving the action" })
//         });
// });