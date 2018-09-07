const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API Running...');
});

server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => res.status(500).json(err));
} );

server.get('/api/actions', (req, res) => {
    db('actions')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => res.status(500).json(err));
} );

server.post('/api/projects',(req, res) => {
    
    db.insert(req.body).into('projects').then(response => {
        res.status(201).json(response);
    }).catch(err => {
        console.error('Error', err);
        res.status(500).json({message: "Error creating project"});
    });
});

server.post('/api/actions',(req, res) => {
    
    db.insert(req.body).into('actions').then(response => {
        res.status(201).json(response);
    }).catch(err => {
        console.error('Error', err);
        res.status(500).json({message: "Error creating project"});
    });
});

server.put("/api/projects/:id", (req, res) => {
    const { id } = req.params; 
    const data = req.body; 
    db('projects')
        .where({id})
        .update(data)
        .then(count => {
            if(count < 1){
                res.status(400).json({message: "ID not found"})
            }
            res.status(200).json({message:"Project Updated"})
        }).catch(err => {
            res.status(500).json(err); 
        })
});

server.put("/api/actions/:id", (req, res) => {
    const { id } = req.params; 
    const data = req.body; 
    db('actions')
        .where({id})
        .update(data)
        .then(count => {
            if(count < 1){
                res.status(400).json({message: "ID not found"})
            }
            res.status(200).json({message:"Action Updated"})
        }).catch(err => {
            res.status(500).json(err); 
        })
}); 

server.delete("/api/projects/:id", (req, res) => {
    const { id } = req.params; 
    db('projects')
        .where({id})
        .del()
        .then(count => {
            if(count < 1){
                res.status(400).json({message: "ID not found"})
            }
            res.status(200).json({message: "Project deleted"})
        }).catch(err => {
            res.status(500).json(err)
        })
}); 

server.delete("/api/actions/:id", (req, res) => {
    const { id } = req.params; 
    db('projects')
        .where({id})
        .del()
        .then(count => {
            if(count < 1){
                res.status(400).json({message: "ID not found"})
            }
            res.status(200).json({message: "Action deleted"})
        }).catch(err => {
            res.status(500).json(err)
        })
}); 


server.listen(8000);