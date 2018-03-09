const express = require('express');
const router = express.Router();

const projectactioncontexts = require('./projectactioncontextsController');

router
  .route('/')
  .post(projectactioncontexts.create)
  .get(projectactioncontexts.request);

router
  .route('/:id')
  .get(projectactioncontexts.request)
  .put(projectactioncontexts.update)
  .delete(projectactioncontexts.del);

module.exports = router;
