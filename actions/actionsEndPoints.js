const express = require('express');

const repository = require('./actionsRepository.js');
const statusCodes = require('../common/statusCodes.js');
const actionsRouter = express.Router();

actionsRouter.get('/' , (req, res) => {
  repository.get()
  .then((actions) => {
    return res.json(actions);
  });
});
actionsRouter.get('/:id' , (req, res) => {
  const { id } = req.params;
  repository.get(id)
  .then((actions) => {
    if (actions.error) return res.status(statusCodes.userError).json(actions.error);
    return res.json(actions[0]);
  });
});
actionsRouter.post('/', (req, res) => {
  repository.post(req.body)
  .then(action => {
    if (action.error) return res.status(statusCodes.userError).json(action.error);
    res.status(statusCodes.created).json(action)
  });
});
actionsRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  repository.put(id, true)
  .then((result) => {
    return res.json(result);
  });
});
actionsRouter.put('/:id/reset', (req, res) => {
  const { id } = req.params;
  repository.put(id, false)
  .then((result) => {
    return res.json(result);
  });
});

module.exports = actionsRouter;
