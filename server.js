const express = require('express');
const bodyParser = require('body-parser');

const server = express();

const knex = require('./database/db.js')

server.use(bodyParser.json());

// endpoints here
server.get('/', (req,res) => {
    res.status(200).json({success: true})
})
//projects

async function createProject(req, res) {
    const project = req.body;
    try {
        const addedProject = await knex.insert(project).into('Projects');
        res.status(201).json({addedProject});
    } catch (error) {
        res.status(500).json({ errorMessage: 'Could not insert the project' });
    }
}
server.post('/projects', createProject);

server.get('/projects', (req,res) => {
    knex.select().from('Projects')
        .then(allprojects => {
            res.status(201).json({allprojects});
        })
        .catch(error => {
            res.status(500).json({ errorMessage: 'Could not get the projects' });
        })
})

server.get('/projects/:id', (req,res) => {
    const {id} = req.params;
    knex.select('Projects.id',
        'Projects.name',
        'Projects.description',
        'Projects.Completed',
        'Actions.id',
        'Actions.description',
        'Actions.notes',
        'Actions.completed',
        'Contexts.id',
        'Contexts.context',
    )
    .from('Projects')
    .join('Project_Actions','Projects.id','Project_Actions.projectId')
    .join('Actions','Project_Actions.actionId','Actions.id')
    .join('Project_Contexts','Projects.id','Project_Contexts.projectId')
    .join('Contexts','Project_Contexts.contextId','Contexts.id')
    .where('Projects.id',id)
        .then(post => {
            res.status(201).json({post});
        })
        .catch(error => {
            res.status(500).json({ errorMessage: 'Could not get the Post' });
        })
})

// actions
async function createAction(req, res) {
    const action = req.body;
    try {
        const addedAction = await knex.insert(action).into('Actions');
        res.status(201).json({addedAction});
    } catch (error) {
        res.status(500).json({ errorMessage: 'Could not insert the Action' });
    }
}
server.post('/actions', createAction);

server.get('/actions', (req,res) => {
    knex.select().from('Actions')
        .then(allActions => {
            res.status(201).json({allActions});
        })
        .catch(error => {
            res.status(500).json({ errorMessage: 'Could not get the Actions' });
        })
})

// Contexts
async function createContext(req, res) {
    const Context = req.body;
    try {
        const addedContext = await knex.insert(Context).into('Contexts');
        res.status(201).json({addedContext});
    } catch (error) {
        res.status(500).json({ errorMessage: 'Could not insert the Context' });
    }
}
server.post('/contexts', createContext);

server.get('/contexts', (req,res) => {
    knex.select().from('Contexts')
        .then(allContexts => {
            res.status(201).json({allContexts});
        })
        .catch(error => {
            res.status(500).json({ errorMessage: 'Could not get the Contexts' });
        })
})


const port = 3000;
server.listen(port, function() {
    console.log(`Server Listening on ${port}`);
});
