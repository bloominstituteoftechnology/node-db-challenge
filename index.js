const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);
const port = 5000;

server.use(express.json());

//post for projects
//INSERT INTO projects (name, description, completed) VALUES (1, 2, 3)


//post for actions
//INSERT INTO actions (action_description, notes, completed, project_id) VALUES (w, x, y, z)

//get for project by id
//SELECT * FROM projects WHERE id = 1

server.listen(port, () =>{
    console.log(`Server is up and running on port ${port}`)
})