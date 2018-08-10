const express = require('express');
const db = require('./data/db');

const server = express();
server.use(express.json());

const PORT = 5000;

server.get('/', (req, res) => {
    res.send('up and running...');
});

server.get('/projects/:id', (req, res) => {
    const { id } = req.params;

    db('projects')
    .where({ id })
    .first()
    .then(project => {
        if(project) {
            db('actions')
            .where({ project_id: id })
            .then(actions => {
                project.actions = actions;

             res.status(200).json(project)
            })
            .catch(err => res.json(err));
    } else {
        res.status(404).json({ message: 'nope, did not locate project' })
    }
})
    .catch(err => res.json(err));
});

server.get('/actions', (req, res) => {
    db('actions')
    .then(actions => {
        res.status(200).json(action)
    })
    .catch(() => {
        res.status(500).json({ message: "action not found" })
    })
});


server.post('/projects', (req, res) => {
    const project = req.body;
  
    db
    .insert(project)
    .into('projects')
    .then(ids => {
      const id = ids[0];
       res.status(201).json({ id, ...project });
    })
    .catch(err => res.status(500).json(err));
  });
  
  server.put('/projects/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;
  
    db('projects')
    .where({ id })
    .update(changes)
    .then(count => {
      if (count) {
  
        db('projects')
        .select('name')
        .where({ id })
        .then(project => {
          res.status(200).json(project);
        })
        .catch(err => {
          res.status(500).json(err);
        })
      } else {
        res.status(404).json({ message: 'The project was not found'});
      }
   })
    .catch(err => res.status(500).json(err))
  });
  
  server.delete('/projects/:id', (req,res) => {
    const { id } = req.params;
  
    db('projects')
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err))
  });

server.listen(PORT, () => {
    console.log('Server up and running on ${PORT}');
})