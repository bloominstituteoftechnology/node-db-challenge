const express = require('express');

const db = require('./data/db');

const server = express();
server.use(express.json());

const port = 3333;


//HOME
server.get('/', (req, res) => {
    res.send('Rock-n-Roll!!');
});

//POST CREATE NEW PROJECT
server.post('/api/projects', (req, res) => {
    const { name, description, completed } = req.body;
    const newProject = { name, description, completed };
    if (!name) {
        res.status(400).json({'ERROR!!! dataShape': {
            name: 'REQUIRED & UNIQUE',
            description: 'string', 
            notes: 'string',
            completed: 'BOOLEAN, DEFAULT SET TO FALSE BY SERVER'
            } 
        });
        return; 
    };
    db('projects').insert(newProject).then(response => {
        res.status(201).json(response)
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: 'Did not save to server!', err});
    });
});
//GET PROJECTS
server.get('/api/projects', (req, res) => {
    db('projects').then(projects => {
        res.status(200).json({projects});
    });
});


server.listen(port, () => 
    console.log(`Rock-n-Roll @port: ${port}`)
);
