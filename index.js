const express = require('express');
const morgan = require('morgan');

const knex = require('knex');
const knexConfig= require('./knexfile');
const db = knex(knexConfig.development);

const PORT = 9000;

const server = express();

server.use(express.json());
server.use(morgan('dev'));

//----------PROJECTS ENPOINTS----------

//====GET ALL PROJECTS====
server.get('/api/projects', async (req, res) => {
  const payload = await db('projects');
  res.status(200).json(payload);
});

//====GET PROJECT BY ID====
server.get('/api/projects/:id', async (req, res) => {
    const { id } = req.params;
    const projectFetch = db('projects').where('id', '=', id);
    const actionsFetch = db('actions').where('projectId', '=', id);
    const [[project], actions] = await Promise.all([projectFetch, actionsFetch]);
    const packagedProject = {
      ...project,
      actions,
    };
    res.status(200).json(packagedProject);
  });
  
//====POST A NEW PROJECT====
server.post('/api/projects/', async (req, res) => {
    const { body } = req;
    const [id] = await db('projects').insert(body);
    res.status(201).json(id);
});
  
//====UPDATE A PROJECT WITH ID===
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
  
//====DELETE PROJECT BY ID====
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
  


//----------ACTIONS ENDPOINTS----------

//====GET ALL ACTIONS====
server.get('/api/actions', async (req, res) => {
    const payload = await db('actions');
    res.status(200).json(payload);
});
  
//====GET ACTION BY ID====
server.get('/api/actions/:id', async (req, res) => {
    const { id } = req.params;
    const payload = await db('actions').where('id', '=', id);
    res.status(200).json(payload[0]);
});

//====POST A NEW ACTION====
server.post('/api/actions/', async (req, res) => {
    const { body } = req;
    const [id] = await db('actions').insert(body);
    res.status(201).json(id);
});
  
//====UPDATE AN ACTION WITH ID====
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
  
//====DELETE AN ACTION BY ID====
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

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});