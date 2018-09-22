const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send("Hello World");
});

server.get('/actions', (req, res) => {
    db('actions')
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

server.get('/actions/:id', (req, res) => {
    const {id} = req.params;
    db('actions')
    .where({id})
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.post('/actions', (req, res) => {
    const body = req.body;
    db.insert(body)
    .into('actions')
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.put('/actions/:id', (req,res)=> {
    const {id} = req.params;
    const body = req.body;
    db('actions')
    .where({id})
    .update(body)
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.delete('/actions/:id', (req,res) => {
    const {id} = req.params;
    db('actions')
    .where({id})
    .del()
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

//projects
server.get('/projects', (req, res) => {
    db('projects')
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

server.post('/projects', (req, res) => {
    const body = req.body;
    db.insert(body)
    .into('projects')
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.put('/projects/:id', (req,res)=> {
    const {id} = req.params;
    const body = req.body;
    db('projects')
    .where({id})
    .update(body)
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.delete('/projects/:id', (req,res) => {
    const {id} = req.params;
    db('projects')
    .where({id})
    .del()
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.get("/projects/:id", (req, res) => {
    const { id } = req.params;
  
    db("projects")
      .where({ id })
      .then(project => {
        if (project.length) {
          db("actions")
            .where({ project_id: id })
            .then(actions => {
              project.actions = actions;
              res.status(200).json({ project, actions });
            })
            .catch(err => {
              res.status(500).json(err);
            });
        } else {
          res.status(404).json({ msg: "not found" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  


const port = process.env.PORT || 5000;
server.listen(5000, () => console.log(`API running on port ${port}`));