// IMPORT DEPENDENCIES
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

// IMPORT KNEX CONFIGURATION
const knexConfig = {
client: 'sqlite3',
connection: {
    filename: './data/projectx.db3',
},
useNullAsDefault: true, // needed for sqlite
};

// DEFINE DATABASE
const dbConfig = require("./knexfile.js")

const db = knex(dbConfig.development);

// DEFINE SERVER
const server = express();

// APPLY MIDDLEWARE
server.use(helmet());
server.use(express.json());

// ROUTE HANDLER TEST
server.get('/', (req, res) => {
res.send("It works!");
});


// LOGIC FOR LISTING ALL PROJECTS
server.get('/api/projects', async (req, res) => {
// get the projects from the database
try {
    const projects = await db('projects'); // retreive all the records from table
    res.status(200).json(projects);
} catch (error) {
    res.status(500).json(error);
}
});

// LOGIC FOR RETREIVING PROJECT BY ID
server.get('/api/projects/:id', async (req, res) => {
// get the projects from the database
try {
    const project = await db('projects')
    .where({ id: req.params.id })
    .first();
    res.status(200).json(project);
} catch (error) {
    res.status(500).json(error);
}
});

const errors = {
'19': 'Another record with that value exists',
};

// LOGIC FOR CREATING A NEW PROJECT
server.post('/api/projects', async (req, res) => {
try {
    const [id] = await db('projects').insert(req.body);

    const project = await db('projects')
    .where({ id })
    .first();

    res.status(201).json(project);
} catch (error) {
    const message = errors[error.errno] || 'We ran into an error';
    res.status(500).json({ message, error });
}
});

// LOGIC FOR EDITING/UPDATING PROJECT
server.put('/api/projects/:id', async (req, res) => {
try {
    const count = await db('projects')
    .where({ id: req.params.id })
    .update(req.body);

    if (count > 0) {
    const project = await db('projects')
        .where({ id: req.params.id })
        .first();

    res.status(200).json(project);
    } else {
    res.status(404).json({ message: 'Records not found' });
    }
} catch (error) {}
});

// LOGIC FOR DELETING A PROJECT
server.delete('/api/projects/:id', async (req, res) => {
try {
    const count = await db('projects')
    .where({ id: req.params.id })
    .del();

    if (count > 0) {
    res.status(204).end();
    } else {
    res.status(404).json({ message: 'Records not found' });
    }
} catch (error) {}
});

const port = process.env.PORT || 9090;
server.listen(port, () => console.log(`\nrunning on ${port}\n`));