const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = './knexfile.js';

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// MIDDLEWARE

function verifyProject(req, res, next) {
  const id = req.body.project_id;
  db('projects')
    .where({ id: id })
    .then(project => {
      if (project.length === 0) {
        res.status(404).json({ message: 'The project needs an id' });
      } else next();
    })
    .catch(err => res.status(500).json(err));
}

// PROJECT ENDPOINTS

// POST ENDPOINT

server.post('/api/projects', (req, res) => {
  const project = req.body;
  if (!project.name || !project.comments) {
    res.status(400).json({ error: 'This project needs a name and comments!' });
  } else
    db.insert(project)
      .into('projects')
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(() =>
        res.status(500).json({ error: 'The project could not be saved.' })
      );
});

// GET ENPOINTS

server.get('/api/projects', (req, res) => {
  db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(() =>
      res.status(500).json({ error: 'The project could not be retrieved.' })
    );
});

server.get('/api/projects/:id', (req, res) => {
  const id = req.params.id;
  db('projects')
    .select()
    .where('id', id)
    .then(projects => {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({ message: 'There is no project with this id!' });
      }
    })
    .catch(err => res.status(500).json(err));
});

// PUT ENDPOINT

server.put('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = req.body;
  if (!project.name || !project.comments) {
    res.status(400).json({ error: 'This project needs a name and comments!' });
  } else
    db('projects')
      .where({ id: id })
      .update(project)
      .then(count => {
        if (count) {
          res
            .status(200)
            .json({ message: 'The project was successfully updated.' });
        } else {
          res
            .status(404)
            .json({ message: 'There is no project with this id!' });
        }
      })
      .catch(() =>
        res.status(500).json({ error: "The project couldn't be updated" })
      );
});

// DELETE ENDPOINT

server.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id: id })
    .del()
    .then(count => {
      if (count) {
        res
          .status(200)
          .json({ message: 'The project was successfully deleted!' });
      } else {
        res.status(404).json({ message: 'There is no project with this id!' });
      }
    })
    .catch(() =>
      res.status(500).json({ error: "The project couldn't be deleted!" })
    );
});

// ACTION ENDPOINTS

// POST ENDPOINT

server.post('/api/actions', verifyProject, (req, res) => {
  const action = req.body;
  if (!action.comments || !action.notes) {
    res.status(400).json({
      error: 'Please provide a comments and comments for this action.'
    });
  } else
    db.insert(action)
      .into('actions')
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(() =>
        res.status(500).json({ error: 'There was an error saving the action.' })
      );
});

// GET ENDPOINTS

server.get('/api/actions', (req, res) => {
  db('actions')
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(() =>
      res.status(500).json({ error: 'The actions could not be retrieved.' })
    );
});
server.get('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ id: id })
    .then(action => {
      if (action.length === 0) {
        res.status(404).json({ message: 'There is no action with this id!' });
      } else res.status(200).json(action);
    })
    .catch(err => res.status(500).json(err));
});

// PUT ENDPOINT

server.put('/api/actions/:id', verifyProject, (req, res) => {
  const { id } = req.params;
  const action = req.body;
  if (!action.comments || !action.notes) {
    res.status(400).json({
      error: 'Please provide comments and a comments for this action.'
    });
  } else
    db('actions')
      .where({ id: id })
      .update(action)
      .then(count => {
        if (count) {
          res
            .status(200)
            .json({ message: 'The action was successfully updated.' });
        } else {
          res.status(404).json({
            message: 'The action with the specified id does not exist.'
          });
        }
      })
      .catch(() =>
        res.status(500).json({ error: 'The action could not be updated!' })
      );
});

// DELETE ENDPOINT

server.delete('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ id: id })
    .del()
    .then(count => {
      if (count) {
        res
          .status(200)
          .json({ message: 'The action was successfully deleted.' });
      } else {
        res.status(404).json({
          message: 'Uh oh! The action with the specified ID does not exist.'
        });
      }
    })
    .catch(err =>
      res.status(500).json({ error: 'Uh oh! The action could not be deleted.' })
    );
});

// SERVER PORT

const port = 6000;
server.listen(port, () => console.log(`API is listening on port ${port}.`));
