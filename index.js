const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json());

///endpoints go here




server.get('/project', (req, res) => {
    db('project')
        .then(proj => res.status(200).json(proj))
        .catch(err => res.status(500).json({error:'These are not the projects you are looking for'})
    )
})

server.get('/project/:id', (req, res) => {
    db('project')
        .where('id', req.params.id)
        .then(proj => {
            if(proj.length === 0) {
                res.status(404).json({ message:'That project doesnt exist:NO ID EXISTS'});
            }
            res.status(200).json(proj);
        })
        .catch(error => {
            res.status(500).json({error:'Well this is embarrassing:Something went wrong'})
        });
})

server.post('/project', (req, res) => {
    const { name, description, completed } = req.body;
    if (!name || !description || !completed) 
    res.status(400).json({errorMessage: 'Required name and description and did you complete this project?'});
    db
        .insert({ name, description, completed })
        .into('project')
        .then(proj => res.status(201).json({name, description, completed}))
        .catch(err => res.status(400).json({error: 'Error posting that project'}))
})

server.delete('/project/:id', (req, res) => {
    const { id } = req.params;
    db('project')
        .where('id', (id))
        .delete()
        .then(proj => {
            if(proj === 0) {
                res.status(404).json({message: "That ID does not exist, therefore, you cannot delete it"});
            }
            res.status(200).json({message:"Great, you deleted that project"});
        })
        .catch(error => {
            res.status(500).json({error:"Error deleting that project"})
        });
})

server.put('/project/:id', (req, res) => {
    const name = req.body;
    const description = req.body; 
    const completed = req.body;
    const { id } = req.params
    if(!name || !description || !completed)
    res.status(400).json({errorMessage:"Provide a name, description and whether or not you completed this project with a 0 or 1"});
    db('project')
        .where('id', (id))
        .update(name, description, completed)
        .then(proj => {
            if(!proj) {
                res.status(404).json({message: "ID doesnt exist buddy"});
            }
            res.status(200).json(name);
        })
        .catch(error => {
            res.status(500).json({error:"Try again dummy"})
        });
})




/////////////////////////////////////////////////////////////////////////////END OF PROJECT ENDPOINTS


server.get('/action', (req, res) => {
    db('action')
        .then(act => res.status(200).json(act))
        .catch(err => res.status(500).json({error:'These actions dont exist'})
    )
})

server.get('/action/:id', (req, res) => {
    db('action')
        .where('id', req.params.id)
        .then(act => {
            if(act.length === 0) {
                res.status(404).json({ message:'ID DONT EXIST'});
            }
            res.status(200).json(act);
        })
        .catch(error => {
            res.status(500).json({error:'Well this is embarrassing:Something went wrong'})
        });
})

server.post('/action', (req, res) => {
    const { project_id, description, notes, completed } = req.body;
    if (!project_id || !description || !notes || !completed) 
    res.status(400).json({errorMessage: 'Required project_id, description, notes and whether or not you completed with a 0 or 1'});
    db
        .insert({ project_id, description, notes, completed })
        .into('action')
        .then(proj => res.status(201).json({project_id, description, notes, completed}))
        .catch(err => res.status(400).json({error: 'Error posting that action'}))
})

server.delete('/action/:id', (req, res) => {
    const { id } = req.params;
    db('action')
        .where('id', (id))
        .delete()
        .then(act => {
            if(act === 0) {
                res.status(404).json({message: "That ID does not exist, therefore, you cannot delete it"});
            }
            res.status(200).json({message:"Great, you deleted that action"});
        })
        .catch(error => {
            res.status(500).json({error:"Error deleting that action"})
        });
})

server.put('/action/:id', (req, res) => {
    const project_id = req.body;
    const description = req.body; 
    const notes = req.body;
    const completed = req.body;
    const { id } = req.params
    if(!project_id || !description || !notes || !completed)
    res.status(400).json({errorMessage:"Provide an id, description, notes and whether or not you completed this action with a 0 or 1"});
    db('action')
        .where('id', (id))
        .update(project_id, notes, description, completed)
        .then(act => {
            if(!act) {
                res.status(404).json({message: "ID doesnt exist buddy"});
            }
            res.status(200).json(description);
        })
        .catch(error => {
            res.status(500).json({error:"Try again dummy"})
        });
})






const port = 3300;
server.listen(port, function() {
 console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
