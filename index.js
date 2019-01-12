//create server
const express = require('express');
const server = express();


//Built-in middleware
server.use(express.json());



//Grab route handlers/endpoints
const projectsRoutes = require('./routers/projectRouter');
server.use('/api/projects', projectsRoutes);
const actionsRoutes = require('./routers/actionRouter');
server.use('/api/actions', actionsRoutes)
// const dishesRoutes = require('./routers/dishesRouter');
// const recipesRoutes = require('./routers/recipesRouter');

// server.use('/api/dishes', dishesRoutes);
// server.use('/api/recipes', recipesRoutes);

//validation function
// server.get('/api', (req, res) =>{
//     res.json('hello there')
// })



//listener
const PORT = 4000;
server.listen(PORT, function(){
    console.log(`Server up and running on port${PORT}`);
});