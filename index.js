const express = require('express');
const knex = require('knex');
const server = express();
server.use(express.json());


const dbConfig = require('./knexfile.js');
const db = knex(dbConfig.development);



server.get('/', (req, res) => {
res.send('Sprint API Running :D');
});



//Projects CRUD

server.post('/projects', (req, res) => {
    const item = req.body;

    db('projects').insert(item)
        .then((ids)=> { 
          res.status(201).json(ids);
        })
                .catch((fail) => {
                    console.log(fail);
                    res.status(500).json({ error: "There was an error while saving the project to the database." });
                });
});


server.get('/projects', (req, res) => {
    db('projects').then(item => {
        res.status(200).json(item)
    }).catch((fail) => {
        console.log(fail);
        res.status(500).json({ error: "There was an error while receiving the project" });
    })
})


server.delete('/projects/:id', (req, res) => {
    db('projects').where({ id:req.params.id }).delete()
        .then((item) => {
            res.status(201).json(item);
            })
        .catch((fail) => {
            console.log(fail);
            res.status(404).json({ message: "The project with the specified ID didn't delete."});
            });
});




//Actions CRUD

server.post('/actions', (req, res) => {
    const item = req.body;

    db('actions').insert(item)
        .then((ids)=> { 
          res.status(201).json(ids);
        })
                .catch((fail) => {
                    console.log(fail);
                    res.status(500).json({ error: "There was an error while saving the action to the database." });
                });
});


server.get('/actions', (req, res) => {
    db('actions').then(item => {
        res.status(200).json(item)
    }).catch((fail) => {
        console.log(fail);
        res.status(500).json({ error: "There was an error while receiving the action" });
    })
})

server.put(`/actions/:id`, (req, res) => {

    db('actions').where({ id:req.params.id } ).update(req.body)
    .then((item) => {
        res.status(201).json(item);
    })
    .catch((fail) => {
        console.log(fail);
        res.status(404).json({ message: "The action with the specified ID does not exist."});
    });
})



















const port = 1337;
server.listen(port, function() {
console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
