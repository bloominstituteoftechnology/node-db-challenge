const express = require('express');
const server = express();
const parser = express.json();
const PORT = "4000";
const dbConfig = require('./knexfile');
const knex = require('knex');
const db = knex(dbConfig.development);
server.use(express.json());

server.listen(PORT, ()  =>  {
    console.log("server listening");
})

server.get('/api/projects', (req, res)  =>  {
    db('projects')
        .then(info  =>  {
            res.json(info)
        })
})

server.get('/api/actions',  (req, res)  =>  {
    db('actions')
        .then(info  =>  {
            res.json(info);
        })
})

server.get('/api/projects/:id', (req, res)  =>  {
    const { id }    =   req.params;
    db('projects').where('id', id)
        .then(info  =>  {
            db('actions').where('project_id', id)
                .then(actions   =>  {
                    project = info[0]
                    project.actions = actions
                    if(project.project_complete === 0)  {
                        project.project_complete = false;
                    }   else if(project.project_complete === 1) {
                        project.project_complete = true;
                    }
                    project.actions.forEach((action)    =>  {
                        if(action.action_complete === 0)    {
                            action.action_complete = false;
                        }   else if(action.action_complete === 1)   {
                            action.action_complete = true;
                        }
                        delete action.project_id;
                    })
                    res.json(project);
                })
        })
})

server.post('/api/projects',    (req, res)  =>  {
    const project = req.body;
    db('projects')
        .insert(project)
        .then(ids   =>  {
            res.status(201).json(ids);
        })
        .catch(err  =>  {
            res.status(500).json({ err: "Could not insert project." });
        })
})

server.post('/api/actions', (req, res)  =>  {
    const action = req.body
    db('actions')
        .insert(action)
        .then(ids   =>  {
            res.status(201).json(ids);
        })
        .catch(err  =>  {
            res.status(500).json({ err: "Could not insert action." });
        })
})
