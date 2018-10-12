const express = require('express');

const helmet = require('helmet');

const logger = require('morgan');

/////Import of Models from Data Directory.....ensure correct
///paths here first as debugging

const actionModel = require('./data/helpers/actionModel');

const projectModel = require('./data/helpers/projectModel');



const server = express();

////// ++++++++MIDDLEWARE +++++++//////////

server.use(
    express.json(),
    logger(":method :url :status :response-time ms"),
    helmet()
    );

////////////+++ProjectModel Routes++++/////////////////////////////

// server.get('/', (req, res) => {
//     res.send("Heyo");
//   });

server.post('/projects', (req, res) => {
    const {name, description} = req.body;
    const newProject = { name, description };
    console.log(req.body);
    projectModel
    .insert(newProject)
    .then(projectId => {
        const { id } = projectId;
        console.log("id", typeof(id));
        projectModel
        .get( id )
        .then(project => {
            console.log("project", project);
            if(!project) {
                return res
                .status(422)
                .send({ Error: `ID ${id} not found`});
            }
        res.status(201).json(project);
        });
    })
    .catch(err => console.log(err))
});

server.get('/projects', (req, res) => {
    projectModel
    .get()
    .then(projects => {
        console.log(`\n** projects **`, projects);
    res
    .json(projects)
    })
    .catch(err => res.send(err))
});

server.get('/projects/:id/actions', (req, res) => {
    console.log(req.query);
    const { id } = req.params;
    
    projectModel
    .get(id)
    .then(projects => {
        res
        .json(projects)
    })
    // actionModel
    // .get(id)
    // .then(actions => {
    //     res
    //     .json(actions)
    // })
    .catch(err => res.send(err))
});

server.put('/projects/:id', (req, res) => {
    console.log(req.query);
    const { id } = req.params;
    const { name } = req.body;
    const project = { name, id};

    projectModel
    .update(id, project)
    .then(editedProject => {
        projectModel
        .get(id)
        .then(foundProject => res.status(200).send(foundProject))
    })
        .catch(err => res.status(500).send(err,"null"));
});

server.delete('/projects/:id', (req, res) => {
    const { id } = req.params;
    projectModel
    .remove(id)
    .then(removedProject => {
        console.log(removedProject);
        res
        .status(200).send(`ID ${id} has been deleted.`)
    })
    .catch(err => res.status(500).send(`There has been an error.`))
});



/////////actionModel Routes///////////////

server.post('/actions', (req, res) => {
    const { project_id, description, notes } = req.body;
    const newAction = { project_id, description, notes };
    console.log(newAction);
    actionModel
    .insert(newAction)
    .then(actionId => {
        const { id } = actionId;
        console.log("id", typeof(id));
        actionModel
        .get( id )
        .then(action => {
            console.log("action", action);
            if(!action) {
                return res
                .status(422)
                .send({ Error: `ID ${id} not found`});
            }
        res.status(201).json(action);
        });
    })
    .catch(err => console.log(err))
});

server.get('/actions', (req, res) => {
    actionModel
    .get()
    .then(actions => {
        console.log(`\n** actions **`, actions);
    res
    .json(actions)
    })
    .catch(err => res.send(err))
});

server.put('/actions/:id', (req, res) => {
    console.log(req.query);
    const { id } = req.params;
    const { description } = req.body;
    const action = { description, id};

    actionModel
    .update(id, action)
    .then(editedAction => {
        actionModel
        .get(id)
        .then(foundAction => res.status(200).send(foundAction))
    })
        .catch(err => res.status(500).send(null));
});

server.delete('/actions/:id', (req, res) => {
    const { id } = req.params;
    actionModel
    .remove(id)
    .then(removedAction => {
        console.log(removedAction);
        res
        .status(200).send(`ID ${id} has been deleted.`)
    })
    .catch(err => res.status(500).send(`Error Ya'll`))
});
  


  
  const port = 7300;
  server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
  });
  