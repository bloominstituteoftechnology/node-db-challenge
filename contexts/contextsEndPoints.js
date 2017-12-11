const express = require('express');

const repository = require('./contextsRepository.js');
const statusCodes = require('../common/statusCodes.js');
const contextsRouter = express.Router();

contextsRouter.get('/' , (req, res) => {
  repository.get()
  .then((contexts) => {
    return res.json(contexts);
  });
});
contextsRouter.get('/:id' , (req, res) => {
  const { id } = req.params;
  repository.get(id)
  .then((contexts) => {
    if (contexts.error) return res.status(statusCodes.userError).json(contexts.error);
    return res.json(contexts[0]);
  });
});
contextsRouter.post('/', (req, res) => {
  const { context } = req.body;
  repository.post(context)
  .then(context => {
    if (context.error) return res.status(statusCodes.userError).json(context.error);
    res.status(statusCodes.created).json(context)
  });
});
module.exports = contextsRouter;