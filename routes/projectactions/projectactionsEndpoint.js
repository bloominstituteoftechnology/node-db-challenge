const express = require('express');
const router = express.Router();

const projectactions = require('./projectactionsController');

router
  .route('/')
  .post(projectactions.create)
  .get(projectactions.request);

router
  .route('/:id')
  .get(projectactions.request)
  .put(projectactions.update)
  .delete(projectactions.del);

module.exports = router;
