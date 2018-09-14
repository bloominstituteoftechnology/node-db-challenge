const express = require('express');
const server = express();
const knex = require('knex');
const dbConfig = require("./knexfile");

const db = knex(dbConfig.development);

server.use(express.json());



server.get('/', (req, res) => {
    res.send('Hello World');
});


//post for Projects
server.post("/api/projects", (req, res) => {
    const projects = req.body
    db("projects")
        .insert(projects)
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => res.status(500).json(err));
});

//post for Actions
server.post("/api/projects/:id/actions", (req, res) => {
    const actions = req.body
    db("actions")
        .insert(actions)
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => res.status(500).json(err));
});



server.get('/api/projects/', (req, res) => {
    db("projects")
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => res.status(500).json(err));
});


server.get('/api/projects/:id', (req, res) => {
    const id = req.params.id;

    db("projects")
        .select()
        .where("id", id)
        .then(projects => {
            if(projects){
                res.status(200).json(projects);
            }else{
                res.status(404).json({message: "No project found"});
            }
            
        })
        .catch(err => res.status(500).json(err));
});


//get actions for each project
server.get('/api/projects/:id/actions', (req, res) => {
    db("actions")
        .select()
        .join("projects", "projects.actions_id", "=", "actions.id")
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => res.status(500).json(err));
});







server.listen(8000, () => console.log("======API running on 8000======"));