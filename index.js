const express = require("express");
const knex = require("knex");

const dbConfig = require("./knexfile.js");
const server = express();

const db = knex(dbConfig.development);
const helper = require("./helper.js");

server.use(express.json());

const PORT = 6000;

//add project
server.post("/api/projects", (req, res) => {
    const project = req.body;
    project.project_name && project.description
    ? helper.addProject(project)
        .then(projectId => res.status(201).json(projectId))
        .catch(err => res.status(401).json({err: "error adding project"}))
    : res.status(400).json({err: "please provide project_name and description"}) 
});

//add action
server.post("/api/actions", (req, res) => {
    const action = req.body;
    action.action_description
    ? helper.addAction(action)
        .then(actionId => res.status(201).json(actionId))
        .catch(err => res.status(401).json({err: "error adding action"}))
    : res.status(400).json({err : "please provide action_description"})
});

//get project by id
server.get("/api/projects/:id", (req, res)=> {
    const {id} = req.params;
    helper.getProject(id)
        .then(project => {
            project.length > 0 ? res.json(project) : res.status(400).json({err: `the project with an id of ${id} does not exist`})
        })
        .catch(err => res.status(500).json({err: `error retreiving project ${err}`}));
})

server.listen(PORT, () => {
    console.log(`server is up and running on ${PORT}`)
});