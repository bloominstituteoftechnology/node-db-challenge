const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const cors = require('cors');
const db = knex(knexConfig.development);
const projectdb = require('./data/helpers/projectsDB');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

function logger(req, res, next){
    console.log(`${req.method} to ${req.url}`)
  
    next();
  }
  
server.use(logger);


server.get('/', (req, res) => {
    res.send("Working");
})

/**********************************************************************/
/*** PROJECTS ***/
/**********************************************************************/
// get all projects
server.get('/api/projects', (req, res) => {
    db('projects')
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: `Something went wrong.`})
    })
})

// get project by ID
server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;

    db('projects')
    .where('id', id)
    .then(project => {
        if(!project.length) {
            res.status(404).json({error: `Could not find project with ID ${id}`})
        }
        db('actions')
        .where('project_id', id)
        .then(actions => {
            project[0].actions = actions;
            
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: `An error occured retrieving project ${id}.`})
        })
    })
})


// add project
server.post('/api/projects', (req, res) => {
    const project = req.body;
    if(!project.name){
        res.status(400).json({error: `Project must have a name.`})
    }

    db.insert(project)
    .into('projects')
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: `Something went wrong.`})
    })
})


/**********************************************************************/
/*** ACTIONS ***/
/**********************************************************************/

server.get('/api/actions', (req, res) => {
    db('actions')
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: `Something went wrong.`})
    })
})

server.get('/api/actions/:id', (req, res) => {
    const {id} = req.params;

    db('actions')
    .where('id', id)
    .then(action => {
        if(!action.length){
            res.status(404).json({error: `No action found for ID ${id}.`})
        }
        res.status(200).json(action)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: `Something went wrong.`})
    })
})

server.post('/api/actions', (req, res) => {
    const action = req.body;
    if(!action.project_id){
        res.status(400).json({error: `Action must have a project ID.`})
    }

    db.insert(action)
    .into('actions')
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: `Something went wrong.`})
    })
})



const port = 9000;
server.listen(port, function() {
    console.log(`\n *** Web API Listening on http://localhost:${port} *** \n`);
})




// POST to add project and actions
// server.post('/api/projects', (req, res) => {
//     const project = req.body;

//     db.insert(project).into('projects')
//     .then(ids => {
//         res.status(201).json(ids[0]);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// })

// server.post('/api/actions', (req, res) => {
//     const project_id = req.body.projectID;
//     if(!projectID || projectID.length < 1){
//         res.status(404).json({error: "No project with that ID was found."})
//     } 

//     db.insert(action).into('actions')
//     .then(ids => {
//         res.status(201).json(ids[0]);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// })


// // GET retrieves project and an array of actions
// server.get('/api/projects', (req, res) => {

//     db('projects')
//     .then(projects => {
//         res.status(200).json(projects)
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({error: `Something went wrong retrieving the projects.`})
//     })
// })