const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.post("/api/projects", (req, res) => {
    if (req.body && req.body.name && typeof req.body.name === "string") {
        db("projects")
            .insert(req.body)
            .then(ids => {
                res.status(201).json(ids[0]);
            }).catch(error => {
                res.status(500).json({ error: "Error inserting project" })
            });
    } else {
        res.status(400).json({ error: "Incorrectly formatted project" })
    }
});

server.post("/api/actions", (req, res) => {
    if (req.body && req.body.description && typeof req.body.description === "string") {
        db("actions")
            .insert(req.body)
            .then(ids => {
                res.status(201).json(ids[0]);
            }).catch(error => {
                res.status(500).json({ error: "Error inserting action" })
            });
    } else {
        res.status(400).json({ error: "Incorrectly formatted action" })
    }
});

server.get("/api/projects/:id", (req, res) => {
    db("projects")
        .where({ id: Number(req.params.id) })
        .then(project => {
            if (project.length !== 0) {
                //start building project object to return
                let returnObj = {
                    id: project[0].id,
                    name: project[0].name,
                    description: project[0].description,
                    completed: project[0].completed,
                    actions: []
                };

                //get all actions associated with this project
                db("actions")
                    .where({ project_id: Number(req.params.id) })
                    .then(actions => {
                        //add each action to the project object
                        actions.forEach(action => {
                            returnObj.actions.push({
                                id: action.id,
                                description: action.description,
                                notes: action.notes,
                                completed: action.completed,
                            });
                        });
                        //return project object
                        res.status(200).json(returnObj);
                    });

            } else
                res.status(404).json({ "error": "Project not found" });
        }).catch(error => {
            res.status(500).json({ "error": "Error retrieving project data" });
        });
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});