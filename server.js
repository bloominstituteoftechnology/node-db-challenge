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
  const payload = await db('projects').where('id', '=', id);
  res.status(200).json(payload[0]);
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
  const { id } = req.params;
  const payload = await db('actions').where('id', '=', id);
  res.status(200).json(payload[0]);
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

server.listen(8000, () => {
  console.log('Server listening on 8000');
});
