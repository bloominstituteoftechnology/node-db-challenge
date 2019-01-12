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



/* server.get('/api/dish', (req, res) => {
  db('dish')
    .then(dish => {
      res.json(dish);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
}); */

server.post('/api/projects', (req, res) => {
  const newProject = req.body;
  if (newProject.project) {
    db.insert(newProject)
      .then(newProject => {
        res.status(201)
          .json(newProject);
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

/* server.get("/api/dish/:id", (req, res) => {
  const { id } = req.params;
  db("dish")
    .where("id", id)
    .then(dish => {
      res.json(dish);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
}); */

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