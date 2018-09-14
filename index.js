const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db=knex(dbConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());


//action operations: 
server.get('/api/actions', (req, res) => {
  db('actions')
   .then(actions => 
    res.status(200).json(actions))
   .catch(err => res.status(500).json({ error: 'Actions not retrieved'}));
});

server.get('/api/actions/:id', (req, res) => {
  const { id } =  req.params;
  db('actions') 
  .WHERE(id)
   .then(action => {
       if(action) {
           res.status(200).json(action);
       } else {
           res.status(404).json({error: 'The action with this ID is not found'});
       }
   })
   .catch(error => res.status(500).json({ error: 'Cannot retrieve action information'}));
});

server.post('/api/actions',(req, res) => {
  const { action, description } = req.body;

  if (!action && !description) res.status(400).json({ error: 'Please provide an action,  and description' });
    db.insert({ action, description })
    .into('actions')
    .then(ids => res.status(201).json( ids ))
    .catch(err => res.status(500).json({ error: 'Action not saved' }));
});


server.put('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  const { edit } = req.body;

  db('actions')
    .WHERE('id')
    .update({edit})
    .then(actions => res.status(200).json([actions]))
    .catch(err => res.status(500).json({ error: 'Action with that ID not found' }));
});


server.delete('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .WHERE('id')
    .remove()
    .then(actions => {
      if (actions) {
        res.status(200).json({message: 'Action succesfully deleted'})
      } else {
        res.status(404).json({ message: `Action not found` });
      }
    })
    .catch(err => res.status(500).json({ message: 'Action could not be deleted' }));
});



const port = 6600;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});