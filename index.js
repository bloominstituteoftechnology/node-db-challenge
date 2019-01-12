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

server.post('/api/projects',    (req, res)  =>  {
    const project = req.body;
    console.log(req.body);
    // db('projects')
    //     .insert(project)
    //     .then(ids   =>  {
    //         res.status(201).json(ids);
    //     })
    //     .catch(err  =>  {
    //         res.status(500).json({ err: "Could not insert project." });
    //     })
})
