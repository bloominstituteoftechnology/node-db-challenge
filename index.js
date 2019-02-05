const express = require('express');
const knex = require('knex');
const db_config = require('./knexfile.js');
const db = knex(db_config.development);

const projectRouter = require('./routers/projectRouters');
const actionRouter = require('./routers/actionRouters');

const server = express();
const PORT = 5000;

server.use(express.json());
server.use('/project', projectRouter);
server.use('./action', actionRouter);

server.get('/project/:id', (req, res) => {
    const { id } = req.params
    db('project')
    .where({ id })
        .first()
        .then(project => {
            db('action')
                .where('project_id', id)
                .then(action => {
                    res.status(200).json({ ...project, action });
                })
        })
        .catch(err => {
            res.status(500).json({ err: 'Failed to get project' })
        })
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});