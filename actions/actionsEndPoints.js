const express = require('express');

const repository = require('./contentsRepository');
const statusCodes = require('../common/statusCodes.js');
const actionsRouter = express.Router();

actionsRouter.get('/' , (req, res) => {
  repository.get()
  .then((actions) => {
    return res.json(actions);
  });
});
actionsRouter.get('/:id' , (req, res) => {
  const { id } = req.params.id;
  repository.get(id)
  .then((action) => {
    if (action.error) return res.status(statusCodes.userError).json(action.error);
    return res.json(action);
  });
});
actionsRouter.post('/', (req, res) => {
  repository.post(req.body)
  .then(action => {
    if (action.error) return res.status(statusCodes.userError).json(action.error);
    res.status(statusCodes.created).json(action)
  });
});