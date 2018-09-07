const express = require('express');
const helmet = require('helmet');

const db = require('./db/db.js')

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db2 = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/', (req, res) => {
    res.send('API running')
})

server.get('/api/projects', (req, res) => {
    db.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
})

server.get('/api/actions', (req, res) => {
    db.getActions()
        .then(actions => {
            res.status(200).json(actions)
        })
})

server.get('/api/actions/:id', (req, res) => {
    db.getActions(req.params.id)
        .then(action => {
            res.status(200).json(action)
        })
})

server.get('/api/projects/:id', (req, res) => {
    db.getProjects(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
})
//how I did it 
server.get('/api/projects/:id/actions', (req, res) => {
    db.getProjectActions(req.params.id).then(actions => {
        console.log(actions)
        db.getProjects(req.params.id).then(project => {
            res.status(200).json({project, actions})
        })
    })
})

//solution code way with array embedded 
server.get('/api/projects/:id/actions/embedded', (req, res) => {   
//    db.embedActions(req.params.id)
    const {id} = req.params//ONLY WORKS DESTRUCTURED

  db2('projects')
    .where({id})//ONLY WORKS DESTRUCTUREED
    .first()// 'Similar to select, but only retrieves & resolves with the first record from the query.' // https://knexjs.org/#Builder-first
    .then( project => {
        if(project){//checks to make sure there is a project, else 
            console.log('isProject')
            console.log(project, "project 0")
            db2('actions')
                .where({ project_id: id })
                .then(
                    actions => {
                        console.log(actions, "actions")
                        console.log(project, "project 1")
                        project.actions = actions;//creates a new variable on project called actions?? passes it the actions that match line 60
                        console.log(project, "project 2")
                        res.status(200).json(project);//then returns the project
                })
                .catch(err => res.json(err));
        } else {
            console.log('no project')
            res.status(404).json({message:'project not found'})
        }
    })
    .catch(err => res.json(err));
}
)


server.post('/api/projects', (req, res) => {
    db.addProject(req.body)
        .then(count => {
            res.status(200).json(count)
        }).catch(err => console.log(err))
})

server.post('/api/actions', (req, res) => {
    db.addAction(req.body)
        .then(actionId => {
            res.status(200).json(actionId)
        })
})

server.put('/api/actions/:id', (req, res) => {
    db.editAction(req.body, req.params.id)
        .then(actionId => {
            res.status(200).json(actionId)
        })
})

server.put('/api/projects/:id', (req, res) => {
    db.editProject(req.body, req.params.id)
        .then(count => {
            res.status(200).json(count)
        })
})

server.delete('/api/projects/:id', (req, res) => {
    db.deleteProject(req.params.id)
        .then(count => {
            res.status(200).json(count)
        })
})

server.delete('/api/actions/:id', (req, res) => {
    db.deleteAction(req.params.id)
        .then(count => {
            res.status(200).json(count)
        })
})

server.listen(9000, () => console.log('\n == server running on 9000 ==\n'))