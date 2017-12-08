const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const db = require('./configuration/db.js');

const server = express();
server.use(bodyParser.json());

const SERVER_STATUS_ERROR = 500;
const USER_STATUS_ERROR = 422;
const STATUS_OK = 200;

//Projects
server.post('/projects',(req, res) => {
  const project = req.body;
  db
    .insert(project)
    .into('projects')
    .then((project) => {
      res.status(STATUS_OK).json({created: project})
    })
    .catch(err => {
      re.status(SERVER_STATUS_ERROR).json({ error: err.message });
    });
});
server.get('/projects', (req, res) => {
  db('projects')
    .join('actions', 'projects.action_id', '=', 'actions.action_id')
    .join('contexts', 'projects.context_id', '=', 'contexts.context_id')
    .select('projects.*', 'actions.project_action', 'actions.description', 'actions.completed', 'contexts.context')
    .then((post) => {
      res.status(STATUS_OK).json(post);
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.message });
    });
});
server.get('/projects/:project_id', function(req, res) {
  const { project_id } = req.params;
  db('projects')
    .where('project_id', project_id)
    .then(function(project) {
      res.status(200).json(project);
    })
    .catch(function(err) {  
      res.status(500).json({ error: err.messsage });
    });
});
server.put('/projects/:project_id', (req, res) => {
  const { project_id } = req.params;
  db('projects')
    .where('project_id', project_id)
    .update(req.body)
    .then(project => {
      res.status(STATUS_OK).json(project);
    })
    .catch(err => {
      res.status(USER_STATUS_ERROR).json({ error: err.message });
    });
});
server.delete('/projects/:project_id', (req, res) => {
  const { project_id } = req.params;
  db('projects')
    .where('project_id', project_id)
    .del()
    .then(user => {
      res.status(STATUS_OK).json({ sucess: true });
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.message });
    });
});
// Actions
server.post('/actions',(req, res) => {
  const action = req.body;
  db
    .insert(action)
    .into('actions')
    .then((action) => {
      res.status(STATUS_OK).json(action)
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({error: err.message })
    });
});
server.get('/actions', (req, res) => {
  db('actions')
    .then((action) => {
      res.status(STATUS_OK).json(action);
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.message });
    });
});
server.get('/actions/:action_id', function(req, res) {
  const { action_id } = req.params;
  const post = db('actions')
    .where('action_id', action_id)
    .then(function(action) {
      res.status(200).json(action);
    })
    .catch(function(err) {
      res.status(500).json({ error: err.messsage });
    });
});
server.delete('/actions/:action_id', (req, res) => {
  db('actions')
    .where('action_id', req.params.action_id)
    .del()
    .then(action => {
      res.status(STATUS_OK).json({ success : true });
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.message });
    });
});
// Contexts
server.post('/contexts',(req, res) => {
  const context = req.body;
  db
    .insert(context)
    .into('contexts')
    .then((context) => {
      res.status(STATUS_OK).json(context)
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.message })
    })
});
server.get('/contexts', (req, res) => {
  db('contexts')
    .then((context) => {
      res.status(STATUS_OK).json(context);
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.message });
    });
});
server.get('/contexts/:context_id', function(req, res) {
  const { context_id } = req.params;
  const user = db('contexts')
    .where('context_id', context_id)
    .then(function(context) {
      res.status(STATUS_OK).json(context);
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.messsage });
    });
});
server.delete('/contexts/:context_id', (req, res) => {
  db('contexts')
    .where('context_id', req.params.context_id)
    .del()
    .then(context => {
      res.status(STATUS_OK).json({ success: true });
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.message });
    });
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});