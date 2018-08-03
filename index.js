const express = require('express');
const server = express();
const dbConfig = require('./data/dbConfig');

const PORT = 8000;

server.use(express.json());

server.get('/projects', async (req, res) => {
  try {
    const projects = await dbConfig('projects');
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).send(`You done goofed with ${err}`);
  }

});

server.get('/projects/:id', async (req, res) => {
  try {
    const project = await dbConfig('projects').where('id', req.params.id).first();
    const actions = await dbConfig('actions').where('project_id', req.params.id);
    project.actions = actions;
    res.status(200).json(project);
  } catch (err) {
    res.status(500).send(`You done goofed with ${err}`);
  }
});

server.post('/projects', async (req,  res) => {
  const {name, description} = req.body;
  try {
    const ids = await dbConfig.insert({name, description}).into('projects');
    const id = ids[0];
    res.status(201).json(await dbConfig('projects').where('id', id));
  } catch(err) {
    res.status(500).send(`Ya done goofed with ${err}`);
  }
});

server.delete('/projects/:id', async (req, res) => {
  try {
    const result = await dbConfig('projects').where('id', req.params.id).del();
    res.status(200).json(result);
  } catch(err) {
    res.status(500).send(`Try again and ${err}`);
  }
});

server.put('/projects/:id', async (req, res) => {
  const {name, description} = req.body;
  try {
    const index = await dbConfig('projects').where('id', req.params.id).first().update({name, description});
    if (index > 0) return res.status(200).json(await dbConfig('projects').where('id', req.params.id).first());
    res.status(200).send("It didn't trigger");
  } catch(err) {
    res.status(500).send(`Try again and ${err}`);
  }
});
//END PROJECTS CRUD

server.get('/actions', async (req, res) => {
  try {
    const actions = await dbConfig('actions');
    res.status(200).json(actions);
  } catch (err) {
    res.status(500).send(`You done goofed with ${err}`);
  }

});

server.post('/actions', async (req,  res) => {
  const {project_id, description, notes} = req.body;
  try {
    const ids = await dbConfig.insert({project_id, description, notes}).into('actions');
    const id = ids[0];
    res.status(201).json(await dbConfig('actions').where('id', id));
  } catch(err) {
    res.status(500).send(`Ya done goofed with ${err}`);
  }
});

server.delete('/actions/:id', async (req, res) => {
  try {
    const result = await dbConfig('actions').where('id', req.params.id).del();
    res.status(200).json(result);
  } catch(err) {
    res.status(500).send(`Try again and ${err}`);
  }
});

server.put('/actions/:id', async (req, res) => {
  const {project_id, description, notes} = req.body;
  try {
    const index = await dbConfig('actions').where('id', req.params.id).first().update({project_id, description, notes});
    if (index > 0) return res.status(200).json(await dbConfig('actions').where('id', req.params.id).first());
    res.status(200).send("It didn't trigger");
  } catch(err) {
    res.status(500).send(`Try again and ${err}`);
  }
});


server.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
