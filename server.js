const express = require('express');
const morgan = require('morgan');
const db = require('knex')(require('./knexfile').development);

const server = express();
server.use(express.json());
server.use(morgan('dev'));

server.get('/api/projects', async (req, res) => {
  const payload = await db('projects');
  res.status(200).json(payload);
});

server.get('/api/projects/:id', async (req, res) => {
  const { id } = req.params;
  const projectPromise = db('projects').where('id', '=', id);
  const actionsPromise = db('actions').where('projectId', '=', id);
  const [[project], actions] = await Promise.all([projectPromise, actionsPromise]);
  const packagedProject = {
    ...project,
    actions,
  };
  res.status(200).json(packagedProject);
});

server.post('/api/projects/', async (req, res) => {
  const { body } = req;
  const [id] = await db('projects').insert(body);
  res.status(201).json(id);
});

server.put('/api/projects/:id', async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  await db('projects')
    .where('id', '=', id)
    .insert(body);
  res.status(200).json(id);
});

server.delete('/api/projects/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  const deletedNum = await db('projects')
    .delete()
    .where('id', '=', id);
  if (deletedNum === 0) {
    res.status(501).json('Request was not implemented in database');
  } else {
    res.status(200).json(deletedNum);
  }
});

server.get('/api/actions', async (req, res) => {
  const payload = await db('actions');
  res.status(200).json(payload);
});

server.get('/api/actions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const actionPromise = db('actions').where('id', '=', id);
    const contextPromise = db('contexts')
      .innerJoin('actionContextMap', 'contexts.id', '=', 'actionContextMap.contextId')
      .where('actionContextMap.actionId', '=', id)
      .select('contexts.name', 'contexts.id');
    const [[action], contexts] = await Promise.all([actionPromise, contextPromise]);
    const payload = { ...action, contexts };
    res.status(200).json(payload);
  }
  catch (err) {
    throw err;
  }
});

server.post('/api/actions/', async (req, res) => {
  const { body } = req;
  const [id] = await db('actions').insert(body);
  res.status(201).json(id);
});

server.put('/api/actions/:id', async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const numberChanged = await db('actions')
    .update(body)
    .where('id', '=', Number(id));
  if (numberChanged === 1) {
    res.status(200).json(id);
  } else {
    res.status(501).json('An error occured in this transaction');
  }
});

server.delete('/api/actions/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  const deletedNum = await db('actions')
    .delete()
    .where('id', '=', id);
  if (deletedNum === 0) {
    res.status(501).json('Request was not implemented in database');
  } else {
    res.status(200).json(deletedNum);
  }
});

server.get('/api/contexts', async (req, res) => {
  const payload = await db('contexts');
  res.status(200).json(payload);
});

server.get('/api/contexts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [payload] = await db('contexts').select().where('id', '=', id)
    res.status(200).json(payload);
  }
  catch (err) {
    throw err;
  }
});

server.post('/api/contexts/', async (req, res) => {
  const { body } = req;
  const [id] = await db('contexts').insert(body);
  res.status(201).json(id);
});

server.put('/api/contexts/:id', async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const numberChanged = await db('contexts')
    .update(body)
    .where('id', '=', Number(id));
  if (numberChanged === 1) {
    res.status(200).json(id);
  } else {
    res.status(501).json('An error occured in this transaction');
  }
});

server.delete('/api/contexts/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  const deletedNum = await db('contexts')
    .delete()
    .where('id', '=', id);
  if (deletedNum === 0) {
    res.status(501).json('Request was not implemented in database');
  } else {
    res.status(200).json(deletedNum);
  }
});



server.use((err, req, res, next) => {
  console.log(err);
  next();
});

server.listen(8000, () => {
  console.log('Server listening on 8000');
});
