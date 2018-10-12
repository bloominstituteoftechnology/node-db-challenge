const express = require('express');
const helmet = require('helmet');
const projectDb = require('./routes/projectModel.js');
const projectRoutes = require('./routes/projectRoutes.js');

const server = express();
const port = 8000;

server.use(helmet(), express.json());

// Sanity Check
server.get('/', (req, res) => {
    res.send('<h1>Live Server<h1>')
});

server.use('/api/projects', projectRoutes);

server.post('/api/actions', (req, res) => {
    // grab data from body
    const newAction = req.body;

    //save to database
    projectDb.addAction(newAction).then(ids => {
        res.status(201).json(ids);
    }).catch( err => {
        res.status(500).json(err.message);
    });
});

function runServer() {
    console.log('\x1b[34m', `\n[server] started server`);
    console.log(`[server] running on port: ${port}\n`)
    console.log('\x1b[0m', '');
}

server.listen(port, runServer());