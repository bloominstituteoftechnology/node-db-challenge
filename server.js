const express = require('express');
const bodyParser = require('body-parser');

const config = require('./knexfile.js');
const knex  = require ('knex')(config.development);
const sqlite = require ('sqlite3');
const server = express();

server.use(bodyParser.json());

server.post('/api/project', function(req, res) {
    knex.insert(req.body).into('projects')
        .then(function(ids) {
            res.status(201).json({ id: ids[0] });
        })
        .catch(function(error) {
            if (error.code === 'SQLITE_CONSTRAINT') {
                res.status(422).json({ error: 'This project already exist'});
            }
            res.status(500).json({ error });
        });
});

server.get('/api/projects', function(req, res) {
    knex('projects')
        .then(function(projects) {
            res.status(200).json(projects);
        })
        .catch(function(error) {
            res.status(500).json({ error });
        });
});

server.get('/api/project/:id', function(req, res) {
    const { id } = req.params;
    knex('projects')
            .join('actions', 'actions.projectId', 'projects.id')
            .select('projects.*', 'actions.description','actions.notes')
            .where('projects.id', id)
        // function getProjectActions(id){
        //     if (id) {
        //         const query = knex('projects');
        //         query
        //             .join('actions', 'actions.projectId', 'projects.id')
        //             .select('projects.*', 'actions.*')
        //             .where('projects.id', id)
            
        //           const promises = [query]; // actions
        //           return Promise.all(promises).then((results) => {
        //             let [actions] = results;
        //             let post = query[0];
        //             post.actions = actions.map(a => { description: a.description });
            
        //             return post;
        //           });
        //         }
        //     return query.then();
        // }
        // getProjectActions(id)
        .then(function(project) {
            res.status(200).json(project);
        })
        .catch(function(error) {
            res.status(500).json({ error });
        });
});

server.get('/api/project/:id/actions', function(req, res) {
    const { id } = req.params;
    knex('actions')
        .where('projectId', id)        
        .then(function(actions) {
            res.status(200).json(actions);
        })
        .catch(function(error) {
            res.status(500).json({ error });
        });
});

server.delete('/api/project/:id', function(req, res) {
    const { id } = req.params;
    knex('projects')
        .where('id', id)
        .del()
        .then(function(q) {
            res.status(200).json(q);
        })
        .catch(function(error) {
            res.status(500).json({ error });
        });
});

const port = 3000;
server.listen(port, function() {
    console.log(`Server Listening on ${port}`);
});