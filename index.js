const express = require("express");
const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const server = express();

const port = 9000;

server.use(express.json());

server.post("/api/projects", (req, res) => {
    let project = req.body;
    if (project.name) {
        project = {
            description: "",
            completed: false,
            ...project
        };
        db("projects")
            .insert(project)
            .then(idReturned => {
                res.status(201).json(idReturned);
            })
            .catch(err => {
                res.status(500).json({
                    message: "Cannot post project to database.",
                    error: err
                });
            });
    } else {
        res.status(400).json({ error: "Please provide a valid name of the project." });
    }
});

server.post("/api/actions", (req, res) => {
    let action = req.body;
    if (action.description && action.project_id) {
        action = {
            notes: "",
            completed: false,
            ...action
        };
        db("actions")
            .insert(action)
            .then(idReturned => {
                res.status(201).json(idReturned);
            })
            .catch(err => {
                res.status(500).json({
                    message: "Cannot post action to database.",
                    error: err
                });
            });
    } else {
        res.status(400).json({ error: "Please provide a description and the ID of the corresponding project." });
    }
});

server.listen(port, () => console.log(`\n== Port ${port} Running ==\n`));
