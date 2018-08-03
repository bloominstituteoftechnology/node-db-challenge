const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json());

///endpoints go here
server.get('/', (req, res) => {
    res.send('We runnin....')
  })

// PROJECTS------------------------------------------------------------------------------
//Get All Projects
server.get('/projects', (req, res) =>{
    db('projects')
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err))
})


const port = 3300;
server.listen(port, function() {
 console.log(`\n=== Yo Yo, Web API Listening on http://localhost:${port} ===\n`);
});

