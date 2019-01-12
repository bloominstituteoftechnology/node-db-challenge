const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);
const server = express();
const PORT = 42;

server.use(express.json());

server.get('/api/projects/:id', (req, res) => {
    db('projects')
        .where('id', id)
            .then(project => {
                if(!project) {
                    res
                        .status(404)
                        .json({ message: 'The specified project could not be retreived' });
        }
        db('actions')
            .where('project_id', id)
                .then(actions => {
                    project[0].actions = actions;
                        res
                            .status(200)
                            .json(project);
                })
                    .catch(err => {
                        res
                            .status(500)
                            .json({ message: 'The project could not be retreived' })
        });
    });
});

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});