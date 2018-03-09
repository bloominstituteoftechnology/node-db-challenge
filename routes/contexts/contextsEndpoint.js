const express = require('express');
const router = express.Router();

const contexts = require('./contextController');

router
  .route('/')
  .post(contexts.create)
  .get(contexts.request);

router
  .route('/:id')
  .get(contexts.request)
  .put(contexts.update)
  .delete(contexts.del);

module.exports = router;
