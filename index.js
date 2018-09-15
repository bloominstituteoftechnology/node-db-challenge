const express = require('express');
const knex = require('knex');




const server = express();
server.use(express.json());


const dbConfig = require('./knexfile.js');
const db = knex(dbConfig.development);


// db('projects')
// .select()
// .then((rows) => {
// //Each row's boolean field is now true/false instead of 1/0
// });

// db('actions')
// .select()
// .then((rows) => {
// //Each row's boolean field is now true/false instead of 1/0
// });


server.get('/', (req, res) => {
res.send('Sprint API Running :D');
});



//Retrieve EndPoint

// server.get(`/projects/:id/actions`, (req,res) => {
//     knex.select('*')
//     .from('projects')




//     // db('actions').where({ relationship:req.params.id })
//     //     .then((id) => {
//     //         res.json(id);
//     //     })
//     //     .catch((fail) => {
//     //         console.log(fail);
//     //         res.status(404).json({message: "The actions with the specified ID do not exist."});
//     //     })

//     // .catch((fail) => {
//     //     console.log(fail)
//     //     res.status(500).json({error: "The project/action information could not be retrieved."});
//     // })
// })




//Projects CRUD

server.post('/projects', (req, res) => {
    const item = req.body;

    db('projects').insert(item)
        .then((ids)=> { 
          res.status(201).json(ids);
        })
                .catch((fail) => {
                    console.log(fail);
                    res.status(500).json({ error: "There was an error while saving the project to the database." });
                });
});


server.get('/projects', (req, res) => {
    db('projects').then(item => {
        res.status(200).json(item)
    }).catch((fail) => {
        console.log(fail);
        res.status(500).json({ error: "There was an error while receiving the project" });
    })
})

server.get(`/projects/:id`, async (req,res) => {
    try {
        const projectObject = await db('projects').where({ id: req.params.id });
        const actionArray = await db('actions').where({ relationship: req.params.id });
        projectObject[0].actions = actionArray;
    
        res.status(200).json(projectObject);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('oops');
    }

   
})


    // db('projects').where({ id:req.params.id })
    //     .then((id) => {
    //         res.json(id);
    //     })
    //     .catch((fail) => {
    //         console.log(fail);
    //         res.status(404).json({message: "The project with the specified ID does not exist."});
    //     })

    // .catch((fail) => {
    //     console.log(fail)
    //     res.status(500).json({error: "The projects's information could not be retrieved."});
    // })



server.delete('/projects/:id', (req, res) => {
    db('projects').where({ id:req.params.id }).delete()
        .then((item) => {
            res.status(201).json(item);
            })
        .catch((fail) => {
            console.log(fail);
            res.status(404).json({ message: "The project with the specified ID didn't delete."});
            });
});

server.put(`/projects/:id`, (req, res) => {

    db('projects').where({ id:req.params.id } ).update(req.body)
    .then((item) => {
        res.status(201).json(item);
    })
    .catch((fail) => {
        console.log(fail);
        res.status(404).json({ message: "The project with the specified ID does not exist."});
    });
})


//Actions CRUD

server.post('/actions', (req, res) => {
    const item = req.body;

    db('actions').insert(item)
        .then((ids)=> { 
          res.status(201).json(ids);
        })
                .catch((fail) => {
                    console.log(fail);
                    res.status(500).json({ error: "There was an error while saving the action to the database." });
                });
});


server.get('/actions', (req, res) => {
    db('actions').then(item => {
        res.status(200).json(item)
    }).catch((fail) => {
        console.log(fail);
        res.status(500).json({ error: "There was an error while receiving the action" });
    })
})

server.put(`/actions/:id`, (req, res) => {

    db('actions').where({ id:req.params.id } ).update(req.body)
    .then((item) => {
        res.status(201).json(item);
    })
    .catch((fail) => {
        console.log(fail);
        res.status(404).json({ message: "The action with the specified ID does not exist."});
    });
})



















const port = 1337;
server.listen(port, function() {
console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
