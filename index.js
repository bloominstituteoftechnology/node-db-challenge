const express = require('express');
const helmet = require('helmet');
const knex = require("knex");
const knexConfig = require("./knexfile")

const db = knex(knexConfig.development)

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
    res.status(200).json({api: "running"});
})

server.get("/api/projects", (req, res) => {
    db("projects")
        .select()
        .then(projects => res.status(200).json(projects))
})

server.post('/api/projects', (req, res) => {
    const changes = req.body;

    if (changes.name === "" || changes.name === undefined) {
        return res.status(400).json({error: "Please make sure the project name is indexed."})
    }

    if (changes.description === "" || changes.description === undefined) {
        return res.status(400).json({error: "Please make sure the project description is indexed."})
    }

    db("projects")
        .insert(changes)
        .then(id => res.status(200).json(id))
        .catch(err => res.status(500).json({error: err}))
});

server.get("/api/actions", (req, res) => {
    
    db("actions")
        .select()
        .then(actions => res.status(200).json(actions))
})

server.post('/api/actions', (req, res) => {
    const changes = req.body;

    if (changes.description === "" || changes.description === undefined) {
        return res.status(400).json({error: "Please make sure the action description is indexed."})
    }

    db("actions")
        .insert(changes)
        .then(id => res.status(200).json(id))
        .catch(err => res.status(500).json({error: err}))
});

server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;

    db("projects")
        .where({id})
        .then(project => {
            db("actions")
                .where({project_id: id})
                .then(action => res.status(200).json({...project, actions: action}))
        })   
        .catch(err => res.status(500).json({error: err}))
});

const port = 9001;

server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});