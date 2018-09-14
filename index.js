const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
 const dbConfigure = require('./knexfile');
 const db = knex(dbConfigure.development);
 const server = express();

 server.use(helmet());
server.use(express.json());

//MIDDLEWARE

function verifyProject (req, res, next) {
    const id = req.body.project_id;
    db('projects').where({ id: id })
    .then(project => {
        if (project.length === 0) {
        res.status(404).json({ message: "The project needs an ID" });
        } else next();
    })
    .catch(err => res.status(500).json(err));
}

//PROJECT ENDPOINTS

server.post('/api/projects', (req, res) => {
    const project = req.body;
    if (!project.name || !project.description) {
        res.status(400).json({ error: "This project needs a name and description!" })
    } else
        db.insert(project)
        .into('projects')
        .then(ids => {
        res.status(201).json(ids);
        })
        .catch(err => res.status(500).json({ error: "Uh oh! The project could not be saved." }))
})

server.get('/api/projects', (req, res) => {
    db('projects')
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => res.status(500).json({ error: "Uh oh! The project could not be retrieved." }));
});
 server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    db('projects as p')
    .where('p.id', id)
    .join('actions as a', 'p.id', 'a.project_id')
    .then(project => {
        if (project.length === 0) {
        res.status(404).json({ message: "Uh oh! There is no project with this ID!" });
        } else
        res.status(200).json(project);
    })
    .catch(err => res.status(500).json(err));
})

server.delete('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    db('projects').where({ id: id }).del()
    .then(count => {
        if (count) {
        res.status(200).json({ message: "The project was successfully deleted!" });
        } else {
        res.status(404).json({ message: "Uh oh! There is no project with this ID!" });
        }
    })
    .catch(err => res.status(500).json({ error: "Uh oh! The project couldn't be deleted!" }));
})
server.put('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    const project = req.body;
    if (!project.name || !project.description) {
        res.status(400).json({ error: "This project needs a name and description!" })
    } else
        db('projects').where({ id: id }).update(project)
        .then(count => {
        if (count) {
            res.status(200).json({ message: "The project was successfully updated." });
        } else {
            res.status(404).json({ message: "Uh oh! There is no project with this ID!" });
        }
        })
        .catch(err => res.status(500).json({ error: "Uh oh! The project couldn't be updated" }));
})

//ACTION ENDPOINTS

server.post('/api/actions', verifyProject, (req, res) => {
    const action = req.body;
    if (!action.description || !action.notes) {
        res.status(400).json({ error: "Please provide a description and comments for this action." })
    } else
        db.insert(action)
        .into('actions')
        .then(ids => {
        res.status(201).json(ids);
        })
        .catch(err => res.status(500).json({ error: "Uh oh! There was an error saving the action." }))
})
 server.get('/api/actions', (req, res) => {
    db('actions')
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => res.status(500).json({ error: "Uh oh! The actions could not be retrieved." }));
});
 server.get('/api/actions/:id', (req, res) => {
    const {id} = req.params;
    db('actions').where({ id: id })
    .then(action => {
        if (action.length === 0) {
        res.status(404).json({ message: "Uh oh! There is no action with this ID!" });
        } else
        res.status(200).json(action);
    })
    .catch(err => res.status(500).json(err));
})
 server.delete('/api/actions/:id', (req, res) => {
    const {id} = req.params;
    db('actions').where({ id: id }).del()
    .then(count => {
        if (count) {
        res.status(200).json({ message: "The action was successfully deleted." });
        } else {
        res.status(404).json({ message: "Uh oh! The action with the specified ID does not exist." });
        }
    })
    .catch(err => res.status(500).json({ error: "Uh oh! The action could not be deleted." }));
})
 server.put('/api/actions/:id', verifyProject, (req, res) => {
    const {id} = req.params;
    const action = req.body;
    if (!action.description || !action.notes) {
        res.status(400).json({ error: "Please provide comments and a description for this action." })
    } else
        db('actions').where({ id: id }).update(action)
        .then(count => {
        if (count) {
            res.status(200).json({ message: "The action was successfully updated." });
        } else {
            res.status(404).json({ message: "Uh oh! The action with the specified ID does not exist." });
        }
        })
        .catch(err => res.status(500).json({ error: "Uh oh! The action could not be updated!" }));
})





const port = 5000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});