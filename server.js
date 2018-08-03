const express = require('express');

const db = require('./data/db');

const server = express();
server.use(express.json());

const port = 3333;


//HOME
server.get('/', (req, res) => {
    res.send('Rock-n-Roll!!');
});

//POST CREATE NEW PROJECT
server.post('/api/projects', (req, res) => {
    const { name, description, completed } = req.body;
    const newProject = { name, description, completed };
    if (!name) {
        res.status(400).json({'ERROR!!! dataShape': {
            name: 'REQUIRED & UNIQUE',
            description: 'string', 
            completed: 'BOOLEAN, DEFAULT SET TO FALSE BY SERVER'
            } 
        });
        return; 
    };
    db('projects').insert(newProject).then(response => {
        res.status(201).json(response)
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: 'Did not save to server!', err});
    });
});
//GET PROJECTS
server.get('/api/projects', (req, res) => {
    db('projects').then(projects => {
        res.status(200).json({projects});
    });
});

//GET PROJECT BY ID, WITH ACTIONS
server.get('/api/projects/:id', async (req, res) => {
    const { id } = req.params;
    //let response ;
    const projectPromise = db('projects').where('id', '=', id);
    const actionsPromise = db('actions').where('project_id', '=', id);
    const dataBundle = await Promise.all([projectPromise, actionsPromise])
    const [project, actions] = dataBundle;
    const response = {project, actions}
    res.status(200).json(response)    
})

//POST CREATE NEW ACTION
server.post('/api/actions', (req, res) => {
    const { project_id, description, notes, completed } = req.body;
    const newAction = { project_id, description, notes, completed };
    if (!project_id || !description) {
        res.status(400).json({'ERROR!!! dataShape': {
            project_id: 'REQUIRED',
            description: 'REQUIRED', 
            notes: 'string',
            completed: 'BOOLEAN, DEFAULT SET TO FALSE BY SERVER'
            } 
        });
        return; 
    };
    db('actions').insert(newAction).then(response => {
        res.status(201).json(response)
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: 'Did not save to server!', err});
    });
});
//GET ACTIONS
server.get('/api/actions', (req, res) => {
    db('actions').then(actions => {
        res.status(200).json({actions});
    });
});





server.listen(port, () => 
    console.log(`Rock-n-Roll @port: ${port}`)
);
//////////////
server.get('/api/recipes/:id', async (req, res) => {
    const { id } = req.params;
    const recipePromise = db('recipes')
      .where('recipes.id', '=', id)
      .leftJoin('dishes', 'recipes.dishId', '=', 'dishes.id')
      .select(db.ref('recipes.name').as('recipeName'), db.ref('dishes.name').as('dishName'));
    const ingredientsPromise = db('ingredients').where('recipeId', '=', id);
    const stepsPromise = db('steps')
      .where('recipeId', '=', id)
      .orderBy('stepNumber')
      .select('description');
    const dataLump = await Promise.all([recipePromise, ingredientsPromise, stepsPromise]);
    const [[recipe], ingredients, steps] = dataLump;
    const payload = {
      ...recipe,
      ingredients,
      steps,
    };
    res.status(200).json(payload);
  });