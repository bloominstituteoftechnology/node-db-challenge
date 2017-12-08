const express = require('express');
const bodyParser = require('body-parser');

const sqlite = require('sqlite3');
const knex = require('./db.js');

const server = express();

server.use(bodyParser.json());

// // endpoints here
server.get('/projects', function(req, res) {
  const projects = knex('projects')
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

server.get('/projects/:id', function(req, res) {
  const { id } = req.params;

  const projects = knex('projects')
    .where('id', id)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

server.post('/projects', function(req, res) {
  const newproject = req.body;
  knex
    .insert(newproject)
    .into('projects')
    .then(function(ids) {
      res.status(201).json({ ids: ids });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The project already exists' });
      } else {
        res.status(500).json(err);
      }
    });
});

server.post('/actions', function(req, res) {
  const action = req.body;
  knex
    .insert(action)
    .into('actions')
    .then(function(text) {
      res.status(201).json({ text: text });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The action already exist' });
      } else {
        res.status(500).json(err);
      }
    });
});

server.get('/projects/:id/actions', function(req, res) {
  const { id } = req.params;

  const actions = knex('actions')
    .where('projectsId', id)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

server.delete('/projects/:id', function(req, res) {
  knex('projects')
    .where('id', req.params.id)
    .del()
    .then(function(count) {
      res.status(200).json({ deleted: count });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The project does not exist' });
      } else {
        res.status(500).json(err);
      }
    });
});

server.get('/actions', function(req, res) {
  const actions = knex('actions')
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

server.get('/actions/:id', function(req, res) {
  const { id } = req.params;

  const actions = knex('actions')
    .where('id', id)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

server.delete('/actions/:id', function(req, res) {
  knex('actions')
    .where('id', req.params.id)
    .del()
    .then(function(count) {
      res.status(200).json({ deleted: count });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The project does not exist' });
      } else {
        res.status(500).json(err);
      }
    });
});

server.post('/contexts', function(req, res) {
  const newcontext = req.body;
  knex
    .insert(newcontext)
    .into('contexts')
    .then(function(context) {
      res.status(201).json({ context: context });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The context already exists' });
      } else {
        res.status(500).json(err);
      }
    });
});

server.get('/contexts', function(req, res) {
  const contexts = knex('contexts')
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

server.get('/contexts/:id', function(req, res) {
  const { id } = req.params;

  const contexts = knex('contexts')
    .where('id', id)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

server.delete('/contexts/:id', function(req, res) {
  knex('contexts')
    .where('id', req.params.id)
    .del()
    .then(function(count) {
      res.status(200).json({ deleted: count });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The contexts does not exist' });
      } else {
        res.status(500).json(err);
      }
    });
});

server.post('/', function(req, res) {
  const { context } = req.body;

  repository
    .insert(context)
    .then(function(ids) {
      res.status(200).json(ids);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not create the context' });
    });
});

server.get('/:id/contexts', function(req, res) {
  const { id } = req.params;
  const getProjectContexts = function getProjectContexts(postId) {
    return db('contexts as c')
      .join('projectcontexts as pc', 'c.id', 'pc.contextId')
      .select('c.context')
      .where('pc.projectId', projectId)
      .then();
  };
  knex
    .getProjectContexts(id)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not retrieve the project contexts' });
    });
});

server.listen(3000, () => console.log('running on port 3000'));
