const express = require('express');

const knex = require('knex');

const db_config = require('./knexfile.js');

const db = knex(db_config.development);

// const dbProjectHelpers = require('./data/db_projectHelpers');
// const dbActionHelpers = require('./data/db_actionHelpers');

const projectRouter = require('./routers/projectRouters');
const actionRouter = require('./routers/actionRouters');

const server = express();
const PORT = 5000;

server.use(express.json());
server.use('/project', projectRouter);
server.use('./action', actionRouter)






// server.get('/project/:id', (req, res) => {
//     const { id } = req.params;
//     dbProjectHelpers.getProjectById(id)
//         .then(projectInfo => {
//             res.send(projectInfo)
//         })
//         .catch(err => {
//             res.status(500).json({ err: 'Failed to get project' })
//         })
// });





server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});