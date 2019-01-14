let actionsAll = '';
const ENV = 'development';
const express = require('express');
const knex = require('knex');
const dbCONFIG = require('./knexfile.js')
const server = express()
const db = knex(dbCONFIG[ENV])


server.use(express.json());


const PORT = 4444;

server.get('/api/actions', (req, res) => {
    db('actions')
    .then(info => {
        res.json(info)})
        .catch(err => {
            res.status(500).json({err: `${err} Something went wrong`})
        })
})

server.get('/api/projects', (req, res) => {
    db('actions')
    .then(information => {
        actionsAll = information;})
        .catch(err => {
            res.status(500).json({err: `${err} Something went wrong`})
        })

    db('projects')
    .then(info => {
        info.map(item => {return item.actions = actionsAll.filter(action => {return action.project_id === item.id})})
        res.json(info)})
        .catch(err => {
            res.status(500).json({err: `${err} Something went wrong`})
        })
})

server.get('/api/projects/:id', (req,res) => {
    const {id} = req.params;

    db('actions')
    .then(information => {
        actionsAll = information;})
        .catch(err => {
            res.status(500).json({err: `${err} Something went wrong`})
        })

    db('projects').where('id',id)
    .then(info => {
        if (info.length === 1) {
            info.map(item => {return item.actions = actionsAll.filter(action => {return action.project_id === item.id})})
            res.json(info);
        }
        else {
            res.status(404).json({message: `Could not find project with that id`})
        }
    })
    .catch(err =>
    res.status(500).json({message: `Could not find project ${err}`}))
})

server.get('/api/actions/:id', (req,res) => {
    const {id} = req.params;
    db('actions').where('id',id)
    .then(info => {
        if (info.length === 1) {
            res.json(info);
        }
        else {
            res.status(404).json({message: `Could not find action with that id`})
        }
    })
    .catch(err =>
    res.status(500).json({message: `Could not find action ${err}`}))
})

server.post('/api/projects', (req,res) => {
    const project = req.body;
    const missing = ['project_name', 'project_description', 'project_complete'].filter(item => {return project.hasOwnProperty(item) === false})
    if(missing.length===0)
    {db('projects').insert(project)
    .then(ids => {
        res.status(201).json(res.json({message: `${project.project_name} added`}))})
    .catch(err => {
        res.status(500).json({err: `Could not add project! ${err}`})
    })
    }

    else {res.status(500).json({message: `missing info: ${missing}`})}
    })

    server.post('/api/actions', (req,res) => {
        const action = req.body;
        
        const missing = ['project_id', 'action_description', 'action_complete'].filter(item => {return action.hasOwnProperty(item) === false})
        if(missing.length===0)
        {db('actions').insert(action)
        .then(ids => {
            res.status(201).json(res.json({message: `${action.action_description} added`}))})
        .catch(err => {
            res.status(500).json({err: `Could not add project! ${err}`})
        })
        }
    
        else {res.status(500).json({message: `missing info: ${missing}`})}
        })

        server.delete('/api/actions/:id', (req,res) => {
            const {id} = req.params;
            
            db('actions').where('id',id).del()
            .then(count => {res.json({message: `${count} deleted`})})
            .catch(err => {
                res.status(500).json({message: `Could not delete`})
            })})


            server.delete('/api/projects/:id', (req,res) => {
                const {id} = req.params;
                
                db('projects').where('id',id).del()
                .then(count => {res.json({message: `${count} deleted`})})
                .catch(err => {
                    res.status(500).json({message: `Could not delete`})
                })})

            server.put('/api/projects/:id', (req,res) => {
                const {id} = req.params;
                const project = req.body;
                const missing = ['project_name', 'project_description', 'project_complete'].filter(item => {return project.hasOwnProperty(item) === false})
                if(missing.length===0)
                {
                db('projects').where('id', id).update(project)
                .then(count => {res.json({message: `${project.project_name} updated`})})
                .catch(err => {
                    res.status(500).json({message: `Could not update`})
                })
                }
            
                else {res.status(500).json({err: `missing info: ${missing}`})}
            })

            server.put('/api/actions/:id', (req,res) => {
                const {id} = req.params;
                const action = req.body;
                const missing = ['project_id', 'action_description', 'action_complete'].filter(item => {return action.hasOwnProperty(item) === false})
                if(missing.length===0)
                {
                db('actions').where('id', id).update(action)
                .then(count => {res.json({message: `${action.action_description} updated`})})
                .catch(err => {
                    res.status(500).json({message: `Could not update`})
                })
                }
            
                else {res.status(500).json({err: `missing info: ${missing}`})}
            })

server.listen(PORT, (err) => {
    if (err) {console.log(err);}
    else {console.log(`listening on port ${PORT}`)}
} )