// create a junction table projects-actions (with context id) and use it
// to get the final endpoint (project/actions/contexts)
// add a redirect to /api/projects if the user types in an invalid url route
// change the migrations file to use promises https://github.com/atiffany/Sprint-Challenge-RDBMS/blob/master/database/migrations/20180126082042_createProjectsTable.js
// add auth (jwt) to all routes except a public one
// refactor into controller and routes (like in the final solution video)

const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./database/db.js');

const server = express();

server.use(bodyParser.json());

// endpoints here 

server.get('/', (req, res)=>{
    res.send('all good');
});

server.post('/api/projects', (req, res)=> {
    const project = req.body;
    knex.insert(project)
    .into('projects')
    .then((project)=>{
        res.status(200).json({ project })
    })
    .catch(()=> {
        res.status(500).json({ errormessage: 'could not instert the project'});
    })
});

server.put('/api/projects/:id', (req,res)=> {
    console.log('pat');
    const { id } = req.params;
    const { name } = req.body;
    knex('projects')
    .where('id', id)
    .update('name', name)
    .then((project)=> {
      res.status(200).json(project);
    })
    .catch(()=> {
      res.status(500).json({error : 'problem getting the record'});
    })
  });

server.get('/api/projects', (req, res)=> {
    knex('projects')
    .then((projects) =>{
        res.status(200).json(projects);
    })
    .catch(() => {
        res.status(500).json({errormessage: 'could not find any records'});
    });
});

server.get('/api/projects/:id', (req,res) => {
    const { id } = req.params;
    knex('projects')
    .where('id', id)
    .then((record) => {
        res.status(200).json(record);
    }) 
    .catch(() => {
       res.status(500).json({error:'there was a problem finding the record'});
    })
});

server.delete('/api/projects/:id', (req,res)=> {
    console.log('pat');
    const { id } = req.params;
    knex('projects')
    .where('id', id)
    .del()
    .then((project)=> {
      res.status(200).json(project);
    })
    .catch(()=> {
      res.status(500).json({error : 'problem getting the record'});
    })
  });

  server.post('/api/actions', (req,res) => {
      const action = req.body;
      knex.insert(action)
      .into('actions')
      .then((action) => {
          res.status(200).json(action);
      })
      .catch((error)=>{
          res.status(500).json(error);
      })
  });

  server.get('/api/actions', (req,res) => {
      knex('actions')
      .then((actions)=> {
          res.status(200).json(actions);
      })
      .catch(()=> {
          res.status(500).json({error:'error getting actions'});
      })
  });

  server.put('/api/actions/:id', (req,res)=> {
    const { id } = req.params;
    const { notes } = req.body;
    console.log(id , notes);
    knex('actions')
    .where('id', id)
    .update('notes', notes)
    .then((value)=> {
      res.status(200).json(value);
    })
    .catch((error)=> {
      res.status(500).json({error : 'problem updating the record'});
    })
  });

  server.delete('/api/actions/:id', (req,res) => {
      const { id } = req.params;
      console.log(id);
      knex('actions')
      .where('id', id)
      .del()
     .then((action)=> {
        res.status(200).json(action);
      })
      .catch(()=> {
        res.status(500).json({error : 'problem getting the record'});
      })
    });

    server.post('/api/contexts',(req,res)=> {
      const context = req.body;
      console.log(context);
      knex.insert(context)
      .into('contexts')
      .then((context)=> {
          res.status(200).json(context);
      })
      .catch(()=> {
          res.status(500).json({error : 'problem in inserting action'});
      })
    });

    server.get('/api/contexts',(req,res)=> {
        knex('contexts')
        .then((contexts) => {  
            res.status(200).json(contexts);
        })
        .catch((error) => {
            res.status(500).json({error:'there was a prob getting contests'});
        })
    });

    server.put('/api/contexts/:id',(req,res)=>{
        const { id } = req.params;
        const { context } = req.body;
        console.log(id,context);
        knex('contexts')
        .where('id',id)
        .update('context',context)
        .then((context)=>{
            res.status(200).json(context);
        })
        .catch((error)=>{
            res.json(500).json({error:'error update'});
        })
    });

    server.delete('/api/contexts/:id', (req,res)=> {
        const { id } = req.params;
        console.log(id);
        knex('contexts')
        .where('id', id)
        .del()
        .then((delItem)=> {
            res.status(200).json(delItem);
        })
        .catch((error)=>{
            res.status(500).json({error:'prob deleting the item'});
        })
    });


  
  /*
  knex('books')
.where('published_date', '<', 2000)
.update({
  status: 'archived',
  thisKeyIsSkipped: undefined
})
*/

  

server.listen(3000, function(){console.log('server running on port 3000')});