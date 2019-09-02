const db = require('../data/dbConfig')
const express = require('express');
const knex = require('knex');
const router= express.Router();


//projects 

router.get('/', (req, res) => {
  db('projects')
  .then(projects => {
    res.json(projects); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve projects' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('projects').where({ id }).first()
  .then(project => {
    res.json(project);
  }) 
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve project' });
  });
});

router.post('/', (req, res) => {
  const newProject = req.body;
  db('projects').insert(projectData)
  .then(ids => {
    db('projects').where({ id: ids[0] })
    .then(newProjectEntry => {
      res.status(201).json(newProjectEntry);
    });
  })
  .catch (err => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data" });
  });
});

//resources

router.get('/resources', (req, res) => {
    db('projects')
    .then(resources => {
      res.json(resources); 
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve resources' });
    });
  });

router.get('/resources/:id', (req, res) => {
    const { id } = req.params;
  
    db('resources').where({ id }).first()
    .then(resource => {
      res.json(resource);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve resource' });
    });
  });

router.post('/resources/:id', (req, res) => {
    const newResource = req.body;
    db('resources').insert(resourceData)
    .then(ids => {
      db('resources').where({ id: ids[0] })
      .then(newResourceEntry => {
        res.status(201).json(newResourceEntry);
      });
    })
    .catch (err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
  });


  //tasks

  router.get('/tasks', (req, res) => {
    db('tasks')
    .then(tasks => {
      res.json(tasks); 
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve tasks' });
    });
  });


  router.get('/tasks/:id', (req, res) => {
    const { id } = req.params;
  
    db('tasks').where({ id }).first()
    .then(task => {
      res.json(task);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve task' });
    });
  });

  router.post('/tasks/:id', (req, res) => {
    const newTask = req.body;
    db('tasks').insert(taskData)
    .then(ids => {
      db('tasks').where({ id: ids[0] })
      .then(newTaskEntry => {
        res.status(201).json(newTaskEntry);
      });
    })
    .catch (err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
  });

