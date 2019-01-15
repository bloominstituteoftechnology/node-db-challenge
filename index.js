const express = require('express');

const knex = require('knex');
const dbConfig = require('./knexfile');

// HELPER FUNCTIONS
//const dbHelpers = require('./data/db_helpers');


const server = express();
const db = knex(dbConfig.development);
const PORT = 3000;

server.use(express.json());   //body parser middleware

// POST for adding projects
server.post('/projects', (req , res) => {
    const project = req.body;
    console.log('project info', project)
    db('projects').insert(project)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Failed to insert project'});
    });
});

// POST for adding actions
server.post('/actions', (req , res) => {
    const action = req.body;
    console.log('action info', action)
    db('actions').insert(action)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to insert action"});
    })
})

// GET for retrieving projects
server.get('/projects', (req , res) => {
    db('projects')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to retrieve projects"});
    })
});

// GET for retrieving actions
server.get('/actions', (req , res) => {
    db('actions')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to retrieve actions"})
    })
})


// GET for retrieving contexts
server.get('/contexts', (req , res) => {
    db('contexts')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to retrieve contexts"})
    })
})

// GET for retrieving actioncontexts
server.get('/actioncontexts', (req , res) => {
    db('actioncontexts')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to retrieve ActionContexts"});
    })
})


// GET for retrieving projects with specific ID
server.get('/projects/:id', (req , res) => {
    const {id} = req.params;
    db('projects').where('id', id)
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to find specific project id"});
    })
})

//GET for retrieving actions with specific ID
server.get('/actions/:id', (req , res) => {
    const {id} = req.params;
    db('actions').where('id', id)
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to find specific action id"});
    })
})

// GET for retrieving actions with specific ID and associated contexts
server.get('/actioncontexts/:id', (req , res) => {
    const {id} = req.params;
    db('actioncontexts').where('action_id', id)
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to find specific action and associated contexts"});
    })
})
// HELPER FUNCTION When retrieving an action by id, add a property that lists all the contexts related to that action.
// server.get('/actions/:id', (req , res) => {
//     dbHelpers.getActionById()
//     .then(rows => {
//         res.send(rows)
//     })
//     .catch(err => {
//         res.status(500).send(err);
//     })
// })


//GET for retrieving projects with specific ID and associated actions
server.get('/projects/:id/actions', (req , res) => {
    const {id} = req.params;
    db('actions').where('project_id', id)
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to find specific project and all associated actions"});
    })
})

// UPDATE projects
server.put('/projects/:id', (req , res) => {
    const {id} = req.params;
    const project = req.body;

    db('projects').where('id', id).update(project)
    .then(rowCount => {
        res.status(200).json(rowCount)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to update project"});
    })
})

// UPDATE actions
server.put('/actions/:id', (req , res) => {
    const {id} = req.params;
    const action = req.body;

    db('actions').where('id', id).update(action)
    .then(rowCount => {
        res.status(200).json(rowCount)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to update action"});
    })
})

// DELETE projects
server.delete('/projects/:id', (req , res) => {
    const {id} = req.params;
    db('projects').where('id', id).del()
    .then(rowCount => {
        res.status(201).json(rowCount)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to delete project"})
    })
})

// DELETE actions
server.delete('/actions/:id', (req , res) => {
    const {id} = req.params;
    db('actions').where('id', id).del()
    .then(rowCount => {
        res.status(201).json(rowCount)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to delete action"})
    })
})



// SERVER LISTEN
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})