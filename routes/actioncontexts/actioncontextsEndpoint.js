const express = require('express');
const router = express.Router();

const actioncontexts = require('./actioncontextsController');

router
  .route('/')
  .post(actioncontexts.create)
  .get(actioncontexts.request);

router
  .route('/:id')
  .get(actioncontexts.request)
  .put(actioncontexts.update)
  .delete(actioncontexts.del);

module.exports = router;
