const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);
const server = express();

server.use(express.json());

server.post('/api/projects', async (req, res) => {
  const project = req.body;
  try {
    const projects = await db('projects').insert(project);
    return res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: 'server error', err });
  }
});

server.post('/api/actions', async (req, res) => {
  const action = req.body;
  try {
    const actions = await db('actions').insert(action);
    return res.status(200).json(actions);
  } catch (err) {
    res.status(500).json({ message: 'server error', err });
  }
});

server.get('/api/projects/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const projectPromise = db('projects')
      .where('projects.id', '=', id)
      .first();

    const actionsPromise = db('actions').where('actions.project_id', '=', id);

    const result = await Promise.all([projectPromise, actionsPromise]);

    const [project, actions] = result;

    if (project) {
      return res.status(200).json({ ...project, actions });
    } else {
      return res.status(404).json({ message: 'no movie by that id', err });
    }
  } catch (err) {
    res.status(500).json({ message: 'server error', err });
  }
});

server.listen(9000, () => {
  console.log('\n==Listening on 9000==\n')
})
