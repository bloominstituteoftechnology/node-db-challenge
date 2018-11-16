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

server.get("/api/projects/:projectId", (req, res) => {
    const { projectId } = req.params;
    db("projects")
        .where("projects.id", projectId)
        .then(projectsArray => {
            if (!projectsArray.length) {
                res.status(404).json({ error: "The project with the specified ID was not found." });
            } else {
                const result = {
                    ...projectsArray[0],
                    actions: [] 
                };
                db("actions")
                    .where("actions.project_id", projectId)
                    .then(list => {
                        result.actions = list;
                        res.status(200).json(result);
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: "Could not retrieve actions corresponding to project id.",
                            error: err
                        });
                    });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Could not retrieve project with the specified ID.",
                error: err
            });
        });
});

server.get("/api/actions/actionId", (req, res) => {
    const { actionId } = req.params;
    db("actions")
        .where("actions.id", actionId)
        .then(actionsArray => {
            if (actionsArray.length) {
                res.status(200).json(actionsArray[0]);
            } else {
                res.status(404).json({ error: "No action has the requested ID." });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Could not retrieve action with the specified ID.",
                error: err
            });
        });
});

server.listen(port, () => console.log(`\n== Port ${port} Running ==\n`));
