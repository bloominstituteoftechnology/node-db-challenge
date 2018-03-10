const express = require('express');
const projectRouter = express.Router();
const db = require('./projectsController');


projectRouter.get('/', (req, res) => {
  db.getAll()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

projectRouter.post('/', (req, res) => {
  const { name, project_description, project_completed } = req.body;

  if (!name || !project_description) {
    res.status(404).json({message: 'Must provide name, project_description and project_completed field for project'});
  } else {
    db.add(req.body)
      .then(response => {
        res.status(201).json({message: 'Successfully added new project.'});
      })
      .catch(error => {
        res.status(500).json(error);
      })
  }
});

projectRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.remove(id)
    .then(response => {
      res.status(202).json({message: 'Successfully deleted project'});
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

projectRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const projectInfo = req.body;

  db.update(id, projectInfo)
    .then(response => {
      res.status(201).json({message: 'Successfully updated project.'});
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

projectRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  db.projectById(id)
    .then(project => {
      const actions = project.map(action => {
        return {
          id: action.actionsId,
          description: action.description,
          notes: action.notes,
          completed: action.completed 
        } 
      })
      const contexts = project.map(context => {
        return {
          id: context.contextsId,
          context: context.context
        }
      })
      const projectById = {
        id: project[0].projectId,
        description: project[0].project_description,
        completed: project[0].project_completed,
        actions,
        contexts,
      }
      res.status(200).json(projectById);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});
module.exports = projectRouter;