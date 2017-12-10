const express = require('express');

const repository = require('./projectsRepository');
const statusCodes = require('../common/statusCodes.js');
const projectsRouter = express.Router();

projectsRouter.get('/' , (req, res) => {
  repository.get()
  .then((projects) => {
    return res.json(projects);
  });
});
projectsRouter.get('/:id' , (req, res) => {
  const { id } = req.params;
  repository.get(id)
  .then((projects) => {
    if (projects.error) return res.status(statusCodes.userError).json(projects.error);
    return res.json(projects[0]);
  });
});
projectsRouter.post('/', (req, res) => {
  repository.post(req.body)
  .then(project => {
    if (project.error) return res.status(statusCodes.userError).json(project.error);
    res.status(statusCodes.created).json(project)
  });
});
projectsRouter.get('/:id/full' , (req, res) => {
  const { id } = req.params;
  repository.getFull(id)
  .then((project) => {
    if (!project || project.error) return res.status(statusCodes.userError).json(project.error);
    return res.json(project);
  });
});
projectsRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  repository.put(id)
  .then(() => {
    return res.json({completed: true});
  });
});
module.exports = projectsRouter;

