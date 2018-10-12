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
            projectDb('actions')
                .where({ id: id })
                .then(action => {
                    console.log({ id });
                    return response
                        .status(200)
                        .json({ ...project, actions: action });
                });
        })
        .catch(() => {
            return response
                .status(500)
                .json({ Error: "Project info could not be retrieved." })
        });
});

server.post('/api/projects', (request, response) => {
    const newProject = request.body;
    console.log(newProject);

    if (!newProject.name_project) {
        return response
            .status(400)
            .send({ Error: "Missing name for the project" });
    }

    projectDb
        .insert(newProject)
        .into('projects')
        .then(id => {
            return response
                .status(201)
                .json(id);
        })
        .catch(() => {
            return response
                .status(500)
                .json({ Error: "There was an error while saving the project" })
        });
});

// action endpoints
server.get('/api/actions', (request, response) => {
    projectDb('actions')
        .then(actions => {
            return response
                .status(200)
                .json(actions);
        })
        .catch(() => {
            return response
                .status(500)
                .json({ Error: "Could not find list of actions." })
        });
});

server.post('/api/actions', (request, response) => {
    const newAction = request.body;

    if (!newAction.description_action) {
        return response
            .status(400)
            .send({ Error: "Missing description for the action" });
    }

    projectDb
        .insert(newAction)
        .into('actions')
        .then(id => {
            return response
                .status(201)
                .json(id);
        })
        .catch(() => {
            return response
                .status(500)
                .json({ Error: "There was an error while saving the action" })
        });
});

// server.get('/api/actions/:id', (request, response) => {
//     const id = request.params.id;

//     if (!{ id }) {
//         return response
//             .status(404)
//             .json({ Error: "Could not find action." })
//     }

//     projectDb('actions')
//         .where({ id })
//         .then(action => {
//             return response
//                 .status(200)
//                 .json(action);
//         })
//         .catch(() => {
//             return response
//                 .status(500)
//                 .json({ Error: "Action info could not be retrieved." })
//         });
// });