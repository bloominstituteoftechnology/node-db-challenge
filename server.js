const express = require('express');
const projectsDB = require('./data/helpers/projectsDB');
const actionsDB = require('./data/helpers/actionsDB');

const server = express();
server.use(express.json());
const PORT = 3000;
const { projectConstraints, actionConstraints } = require('./middleware');
const errors = require('./middleware/errors');

// endpoints here
server.get('/', (req, res) => {
  res.send('working...');
});

/* 
  PROJECTS API
*/

//get all projects
server.get('/api/projects', async (req, res) => {
  try {
    const projects = await projectsDB.get();
    if (projects.length === 0) {
      res.status(200).json({ message: 'There are currently no projects' });
    } else {
      res.status(200).json(projects);
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// get a project by id
server.get('/api/projects/:id', async (req, res) => {
  const ID = req.params.id;

  try {
    const project = await projectsDB.get(ID);
    if (typeof project === 'undefined') {
      res.status(400).json({ message: `There is no project with id:${ID}` });
    } else {
      res.status(200).json(project);
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// add a project
server.post('/api/projects', projectConstraints, async (req, res) => {
  const NAME = req.body.name;
  const DESCRIPTION = req.body.description;

  const PROJECT = { name: NAME, description: DESCRIPTION, done: false };

  try {
    const response = await projectsDB.insert(PROJECT);
    if (response) {
      res
        .status(200)
        .json({ message: `Project with id:${response.id} has been added.` });
    } else {
      res.status(400).json({
        error: `Undetermined error adding project.`,
      });
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// add an action
/* prettier-ignore */
server.post('/api/projects/:id/actions', actionConstraints, async (req, res) => {
  const ID = req.params.id;
  const NOTES = req.body.notes;
  const DESCRIPTION = req.body.description;

  // actions belong to a project, p_id is FK to project
  const ACTION = {
    notes: NOTES,
    description: DESCRIPTION,
    done: false,
    p_id: ID,
  };

  // make sure we have the project to add the action to
  try {
    const project = await projectsDB.get(ID);
    if (typeof project === 'undefined') {
      res.status(400).json({ message: `There is no project with id:${ID}` });
    } else {
      // have our project!  try and add the action
      try {
        const response = await actionsDB.insert(ACTION);
        if (response) {
          res.status(200).json({ message: `Action with id:${response.id} has been added.` });
        } else {
          res
            .status(400)
            .json({ error: `Undetermined error adding the action.` });
        }
      } catch (err) {
        res.status(500).send(`${err}`);
      }
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// update a project
server.put('/api/projects/:id', projectConstraints, async (req, res) => {
  const ID = req.params.id;
  const NAME = req.body.name;
  const DESCRIPTION = req.body.description;

  const PROJECT = { name: NAME, description: DESCRIPTION };

  // make sure we have the project to update
  try {
    const project = await projectsDB.get(ID);
    if (typeof project === 'undefined') {
      res.status(400).json({ message: `There is no project with id:${ID}` });
    } else {
      // we do! try to update the project
      try {
        const project = await projectsDB.update(ID, PROJECT);
        res.status(200).json({ message: `Project id:${ID} has been updated.` });
      } catch (err) {
        res.status(500).send(`${err}`);
      }
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// delete a project
server.delete('/api/projects/:id', async (req, res) => {
  const ID = req.params.id;

  // make sure we have the project to delete
  try {
    const project = await projectsDB.get(ID);
    if (typeof project === 'undefined') {
      res.status(400).json({ message: `There is no project with id:${ID}` });
    } else {
      // we do! try to delete the project
      try {
        const project = await projectsDB.remove(ID);
        res.status(200).json({ message: `Project id:${ID} has been deleted.` });
      } catch (err) {
        if (err.errno === 19) {
          res.status(500).json({
            error: `Project id:${ID} can not be deleted because it has actions. Delete the actions first, if you really want to delete this project.`,
          });
          return;
        }
        res.status(500).send(`${err}`);
      }
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

/* 
  ACTIONS API
*/

// get all actions
server.get('/api/actions', async (req, res) => {
  try {
    const actions = await actionsDB.get();
    if (actions.length === 0) {
      res.status(200).json({ message: 'There are currently no actions' });
    } else {
      res.status(200).json(actions);
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// get an action by id
server.get('/api/actions/:id', async (req, res) => {
  const ID = req.params.id;

  try {
    const action = await actionsDB.get(ID);
    if (typeof action === 'undefined') {
      res.status(400).json({ message: `There is no action with id:${ID}` });
    } else {
      res.status(200).json(action);
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// update an action
server.put('/api/actions/:id', actionConstraints, async (req, res) => {
  const ID = req.params.id;
  const NOTES = req.body.notes;
  const DESCRIPTION = req.body.description;

  const ACTION = { notes: NOTES, description: DESCRIPTION };

  // make sure we have the project to update
  try {
    const action = await actionsDB.get(ID);
    if (typeof action === 'undefined') {
      res.status(400).json({ message: `There is no action with id:${ID}` });
    } else {
      // we do! try to update the action
      try {
        const action = await actionsDB.update(ID, ACTION);
        res.status(200).json({ message: `action id:${ID} has been updated.` });
      } catch (err) {
        res.status(500).send(`${err}`);
      }
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// delete a action
server.delete('/api/actions/:id', async (req, res) => {
  const ID = req.params.id;

  // make sure we have the action to delete
  try {
    const action = await actionsDB.get(ID);
    if (typeof action === 'undefined') {
      res.status(400).json({ message: `There is no action with id:${ID}` });
    } else {
      // we do! try to delete the action
      try {
        const action = await actionsDB.remove(ID);
        res.status(200).json({ message: `Action id:${ID} has been deleted.` });
      } catch (err) {
        res.status(500).send(`${err}`);
      }
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// error handling
server.use(errors);

// not found - 404
server.use((req, res) => {
  res.status(404).send(`<h1>404: resource "${req.url}" not found</h1>`);
});

server.listen(
  PORT,
  console.log(`\n=== Web API Listening on http://localhost:${PORT} ===\n`),
);
