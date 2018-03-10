const express = require('express');
const knex = require('../database/dbConfig');
const projects_db = require('./projectsController.js');

const projectsRouter = express.Router()

// Posts routes
projectsRouter.post('/', (req, res) => {
    const { name, description, completed } = req.body;

    if (!name || !description) {
        res.status(404).json({ message: 'A name and description must be provided' });
    } else {
        projects_db.addProject(req.body)
            .then(response => {
                res.status(201).json({ message: 'Project has been added' });
            })
            .catch((error) => {
                res.status(500).json({ message: 'cannot add project to database.' });
            })
    }
});

projectsRouter.get('/', (req, res) => {
    projects_db.allProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch((error) => {
            res.status(500).json({ message: 'Unable to retrieve Projects from database.' })
        })
});

projectsRouter.get('/:id', (req, res) => {
    const id = req.params.id;

    projects_db.getID(id)
        .then(project => {
            res.status(201).json(project)
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error finding the project in the database.' });
        });
});

projectsRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const project = req.body;

    projects_db.updateProject(id, project)
        .then(response => {
            res.status(201).json({ message: 'Project has been updated!' });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error updating the project.' });
        })
})

projectsRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    projects_db.deleteProject(id)
        .then(response => {
            res.status(202).json({ message: 'Project has been deleted' });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error deleting Project from database.' });
        })
});

projectRouter.get('/:id/projects', (req, res) => {
    const { id } = req.params;
    db.projectId(id)
      .then(project => {
        const actions = project.map(action => {
          return {
            id: Action.actionsId,
            description: Action.description,
            notes: Action.notes,
            completed: Action.completed 
          } 
        })
        const contexts = project.map(context => {
          return {
            id: Context.contextsId,
            context: Context.Context
          }
        })
        const projectId = {
          id: Project[0].projectId,
          description: Project[0].project_description,
          completed: Project[0].project_completed,
          actions,
          contexts,
        }
        res.status(200).json(projectById);
      })
      .catch(error => {
        res.status(500).json(error);
      })
  });
module.exports = projectsRouter;