const express = require('express');
const db = require('../controllers/projectController');
const projectRouter = express.Router();

projectRouter.get('/', (req, res) => {
  db
    .getAll()
    .then(projects => {
      if(projects) {
        res.status(200).send(projects);
      } else {
        res.status(404).send({ msg: 'There don\'t seem to be any projects' });
      }
    }).catch(err => {
      res.status(500).send({ msg: 'Error retrieving projects', error: err });
    })
});

projectRouter.post('/', (req, res) => {
  const newProject = req.body;

  if (!req.body.name || !req.body.description) {
    res.status(400).send({ msg: 'Please provide both a name and description to add a new project' });
  } else {
    db
      .addProject(newProject)
      .then(project => {
        res.status(201).send({ msg: 'Project successfully added' });
      }).catch(err => {
        res.status(500).send({ error: 'Error adding project', err });
      })
    }
});

projectRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const flag = false;

  db
    .getById(id, flag)
    .then(project => {
      if(project) {
        res.status(200).send(project);
      } else {
        res.status(404).send({ msg: `Project with ID: ${id} could not be found` });
      }
    }).catch(err => {
      res.status(500).send({ msg: 'Error retrieving project', error: err });
    })
});

projectRouter.get('/:id/full', (req, res) => {
  const { id } = req.params;
  const flag = true;

  db
    .getById(id, flag)
    .then(project => {
      if(project.length > 0) {
        res.status(200).send(project);
      } else {
        res.status(404).send({ msg: `Project with ID: ${id} could not be found` });
      }
    }).catch(err => {
      res.status(500).send({ msg: 'Error retrieving project', error: err });
  })
});

projectRouter.get('/:id/context', (req, res) => {
  const { id } = req.params;

  db
    .getContext(id)
    .then(context => {
      if(context.length > 0) {
        res.status(200).send(context);
      } else {
        res.status(404).send({ msg: `Project with ID: ${id} could not be found` });
      }
    }).catch(err => {
      res.status(500).send({ msg: 'Error retrieving context', error: err });
    })
});

projectRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedProject = req.body;

  if(!req.body.name || !req.body.description) {
    res.status(400).send({ msg: 'You must include both a name and description to update a project' });
  } else {
    db
      .updateProject(id, updatedProject)
      .then(updated => {
        if(updated > 0) {
          res.status(200).send({ msg: 'Updated project successfully' });
        } else {
          res.status(404).send({ msg: `Unable to find a post with ID ${id}`});
        }
      }).catch(err => {
        res.status(500).send({ msg: 'Error updating project', error: err });
      })
  }
});

projectRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  db
    .deleteProject(id)
    .then(deleted => {
      if(deleted > 0) {
        res.status(200).send({ msg: 'Project successfully deleted' });
      } else {
        res.status(404).send({ msg: `Unable to find a post with ID ${id}` });
      }
    }).catch(err => {
      res.status(500).send({ msg: 'Error deleting project', error: err });
    })
});

module.exports = projectRouter;