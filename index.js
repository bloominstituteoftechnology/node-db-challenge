const express = require('express');
const knex = require('knex');
const db_config = require('./knexfile.js');

const server = express();
const db = knex(db_config.development);
const PORT = 5678;
//const DB = require('./data/Helpers.js');
//const getDishes = require('./data/modelHelpers');

server.use(express.json());

/* server.get('/api/recipe_book/:id/students', (req, res) => {
    const cohort_id = req.params;
    db('recipe_book').where('recipe_id', id)
    .then(recipes => {
       res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({ err: `Error obtaining ${recipe_id} recipe`})
    })
 }); */

/*  server.get('/api/zoos', (req, res) => {
  db('zoos').leftJoin('addresses', 'zoo_id', 'zoos.id')
  .then(zooInfo => {
    res.send(zooInfo);
  });
}); */

server.get('/api/projects', (req, res) => {

  db('projects')
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

server.get('/api/actions', (req, res) => {

    db('actions')
      .then(actions => {
        res.json(actions);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  });


server.post('/api/projects', (req, res) => {
  const newProject = req.body;
  if (newProject.project) {
      console.log("newProject:", newProject)
    db('projects').insert(newProject)
      .then(ids => {
        res.status(201)
          .json(ids);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "failed to insert project into db" })
      })
  } else {
    res
      .status(400)
     .json({ message: "missing contents" })
  }
});

server.post('/api/actions', (req, res) => {
    const newAction = req.body;
    if (newAction.description) {
        console.log("newAction:", newAction)
      db('actions').insert(newAction)
        .then(ids => {
          res.status(201)
            .json(ids);
        })
        .catch(err => {
          res
            .status(500)
            .json({ message: "failed to insert action into db" })
        })
    } else {
      res
        .status(400)
       .json({ message: "missing contents" })
    }
  });

 server.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  db('projects').leftJoin('actions', 'projects.id', 'actions.project_id')
    .where("projects.id", id)
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
}); 

/* server.get('/api/recipe', (req, res) => {
  db('recipe').leftJoin('dish', 'recipe.dish_id', 'dish.id')
    .then(recipeInfo => {
      res.json(recipeInfo);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
 */
/* server.get('/api/steps', (req, res) => {
  db('steps').leftJoin('recipe', 'recipe_id', 'steps.id')
    .then(stepsInfo => {
      res.send(stepsInfo);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
 */

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});