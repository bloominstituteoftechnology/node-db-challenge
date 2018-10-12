const express = require("express");
const knex = require("knex")
const knexCongfig = require("./knexfile.js");
const db = knex(knexCongfig.development);

const server = express();

server.use(express.json())

server.get("/", (req, res) => {
    res.send('hello')
})

//Get projects
server.get('/api/projects', (req, res) => {
    db('Projects')
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//Post projects
server.post('/api/projects', (req, res) => {
    const project = req.body
    db.insert(project)
        .into('Projects')
        .then(addProject => {
            res.status(200).json(addProject)
        })
        .catch(err => {
            res.status(500).json(err)
        })

})


//get actions
server.get('/api/actions', (req, res) => {
    db('Actions')
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// post actions 

server.post("/api/actions",(req,res) => {
    const action = req.body
    db.insert(action)
    .into('Actions')
    .then(addAction => {
        res.status(200).json(addAction)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})


//Structured get for Project and Actions

server.get('/api/dishes/:id/recipe' ,(req,res)  => {
    const {id} = req.params
    db('Recipes') 
    .where({dish_id:id})
    .then(ids => {
        if (ids) {
          res.status(200).json(ids);
        } else {
          res
            .status(404)
            .json({ error: `Recipe with id of ${id} could not be found `});
        }
      })
      .catch(err => res.status(500).json({ err: "Could not retrieve data" }));
    
    }  )
    


server.listen(9000, () => console.log('api running on 9000'))
