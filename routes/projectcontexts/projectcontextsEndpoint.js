const express = require('express');
const router = express.Router();

const projectcontexts = require('./projectcontextsController');

router
  .route('/')
  .post(projectcontexts.create)
  .get(projectcontexts.request);

router
  .route('/:id')
  .get(projectcontexts.request)
  .put(projectcontexts.update)
  .delete(projectcontexts.del);

module.exports = router;
