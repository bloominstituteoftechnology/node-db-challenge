const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const actionsRouter = require('./routers/actionsRouter.js');
const projectsRouter = require('./routers/projectsRouter.js');

const server = express();
const PORT = 4500;

server.use(express.json());
sergver.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

//beginning of /api/projects endpoints

//POST /api/projects
server.post('/api/projects', (req, res) => {
    const project = req.body;
    db('projects').insert(project)
        .then(id => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to insert project.  Please make sure there is a project_name a project_description and a project_completed"            ' });
        });
});

//GET /api/projects
server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to find projects' });
        });
});

//GET BY ID /api/projects/:id
server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    db('projects').where('id', id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to find project with that id.' });
        });
});

// PUT /api/projects/:id
server.put('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    const project = req.body;
    db('projects').where('id',id).update(project)
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to update Project.' });
        });
});

// DELETE /api/projects/:id
server.delete('/api/projects/id', (req, res) => {
    const { id } = req.params;
    db('projects').where('id', id).del()
        .then(project => {
            res.json(project);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to delete project.' });
        });
});

//end of /api/projects endpoints

//beginning of /api/actions endpoints

//POST /api/actions
server.post('/api/actions', (req, res) => {
    const action = req.body;
    db('actions').insert(action)
        .then(id => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to insert action' });
        });
});

//GET /api/actions
server.get('/api/actions', (req, res) => {
    db('actions')
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to find actions' });
        });
});

//GET BY ID /api/actions/:id
server.get('/api/actions/:id', (req, res) => {
    const { id } = req.params;
    db('actions').where('id', id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to find action with that id.' });
        });
});

//PUT /api/actions/:id
server.put('/api/actions/:id', (req, res) => {
    const { id } = req.params;
    const action = req.body;
    db('actions').where('id',id).update(action)
        .then(action => {
            res.json(action)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to update action.' });
        });
});

//DELETE /api/projects/:id
server.delete('/api/actions/id', (req, res) => {
    const { id } = req.params;
    db('actions').where('id', id).del()
        .then(action => {
            res.json(action);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to delete action.' });
        });
});

//end of /api/actions endpoints

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})