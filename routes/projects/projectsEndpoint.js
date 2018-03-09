const express = require('express');
const router = express.Router();

const projects = require('./projectsController');

router
  .route('/')
  .post(projects.create)
  .get(projects.request);
// .get(projects.request, actions.request, (req, res) => {
//   const { projects, actions } = req;

//   const allActions = {};

//   actions.forEach(a => {
//     // if (a.id )
//   });

//   res.json(projects);
// })

router.route('/:id').get(projects.request);

module.exports = router;
