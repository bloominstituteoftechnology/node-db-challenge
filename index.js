const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);

server.use(express.json());

server.post('/api/projects', (req, res) => {
    const project = req.body;
    if (project.project_name) {
        db('projects').insert(project)
        .then(ids => {
            res.status(201).json(ids)
        })
        .catch(err => {
            res.status(500).json({err: 'Failed to add project.'})
        })
    } else {
        res.status(400).json({ error: 'Please provide project name.' });
    }
})

server.post('/api/actions', (req, res) => {
    const action = req.body;
    if (action.action_description) {
        db('actions').insert(action)
        .then(ids => {
            res.status(201).json(ids)
        })
        .catch(err => {
            res.status(500).json({err: 'Failed to add action.'})
        })
    } else {
        res.status(400).json({ error: 'Please provide action description.' });
    }
})

server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    db('projects').where('id', id)
    .then(project => {
        if (project.length > 0) {
        db('actions').where('project_id', id)
        .then(actions => {
            project = project[0]
            project.actions = actions
            if (project.project_complete === 0) {
                project.project_complete = false;
            } else {
                project.project_complete = true;
            }
            project.actions.forEach((action) => {
                if (action.action_complete === 0) {
                    action.action_complete = false;
                } else {
                    action.action_complete = true;
                }
            })
            res.json(project)
        })} else {
            res.status(404).json({ error: 'No project to display.'})
        }
    })
    .catch(err => {
        res.status(500).json({err: 'Failed to find project'})
    })
})

server.delete('/api/actions/:id', (req,res) => {
    const {id} = req.params;
    db('actions').where('id', id).del()
    .then(count => {
      res.status(200).json({ success: 'Action successfully deleted' })
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to delete action.' })
    })
  });

  server.delete('/api/projects/:id', (req,res) => {
    const {id} = req.params;
    db('projects').where('id', id).del()
    .then(count => {
        db('actions').where('project_id', id).del()
        .then(count => {
            res.status(200).json({ success: 'Project and associated actions successfully deleted' })
        })
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to delete project.' })
    })
  });


  const port = 3302;
  server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
  });
   

