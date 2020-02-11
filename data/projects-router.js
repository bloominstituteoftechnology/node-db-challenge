const express = require('express');

const Projects = require('./projects-model');

const projectRouter = express.Router();

projectRouter.get('/', async (req, res) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
});

projectRouter.get('/:id', async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(400).json({ message: 'Please provide an ID' });
    }
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
});

projectRouter.post('/', async (req, res) => {
  let { name, description } = req.body;

  try {
    const newProject = await Projects.insert(req.body);

    if (!name || name === '' || !description || description === '') {
      res.status(400).json({ error: 'Please provide a name and description' });
    } else {
      res.status(201).json(newProject);
    }
  } catch (error) {
    res.status(500).json({ error: `${error}`});
  }
});

projectRouter.put('/:id', async (req, res) => {
    let { id } = req.params;
    let { name, description, completed } = req.body;
  
     try {
      const project = await Projects.get(id);
  
       if (project) {
        await Projects.update(id, {name, description, completed });
        res.status(200).json(project);
      } else {
        res.status(400).json({message: 'Could not find project'});
      }
  
     } catch (error) {
      res.status(500).json({error: `${error}`});
    }
  });
  
projectRouter.delete('/:id', async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);

    if (project) {
      await Projects.remove(req.params.id);
      res.status(200).json(project);
    } else {
      res.status(400).json({ message: 'Could not find the project' });
    }
  } catch (error) {
    res.status(500).json({ error: `${error}`});
  }
});

module.exports = projectRouter;