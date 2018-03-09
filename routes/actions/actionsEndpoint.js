const express = require('express');
const router = express.Router();

const actions = require('./actionsController');

router
  .route('/')
  .post(actions.create)
  .get(actions.request);

router
  .route('/:id')
  .get(actions.request)
  .put(actions.update)
  .delete(actions.del);

module.exports = router;
