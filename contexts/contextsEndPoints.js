const express = require('express');

const repository = require('./contentsRepository');
const statusCodes = require('../common/statusCodes.js');
const contextsRouter = express.Router();

contextsRouter.get('/' , (req, res) => {
  repository.get()
  .then((contexts) => {
    return res.json(contexts);
  });
});
contextsRouter.get('/:id' , (req, res) => {
  const { id } = req.params.id;
  repository.get(id)
  .then((context) => {
    if (context.error) return res.status(statusCodes.userError).json(context.error);
    return res.json(context);
  });
});
contextsRouter.post('/', (req, res) => {
  repository.post(req.body)
  .then(context => {
    if (context.error) return res.status(statusCodes.userError).json(context.error);
    res.status(statusCodes.created).json(context)
  });
});