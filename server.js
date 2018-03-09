const express = require('express');
const bodyparser = require('body-parser');
const PORT = 3000;

const knex = require('./database/dbConfig');

const server = express();

server.use(bodyparser.json());


server.get('/', (req, res) => {
    res.status(200).json({ message: 'From its slumber, the server rises!' });
});

// async function createProject(req, res) {
//     const project = req.body;
//     try {
//         const addProject = await knex.insert(project).into('Projects');
//         res.status(201).json({ addProject });
//     } catch (error) {
//         res.status(500).json({ message: 'Project Could Not Be Added' })
//     }
// }

// server.post('/projects', createProject);

server.get('/projects', (req, res) => {
    knex.select().from('Projects')
        .then(allProjects => {
            res.status(201).json({ allProjects });
        })
        .catch(error => {
            res.status(500).json({ message: 'Could not Retrieve Projects' })
        })
})

server.get('/projects/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const project = await knex.select('*').from('Projects').where('id', id);
        const actions = await knex.select('*').from('Project_Actions').where('projectId', id);
        const contexts = await knex.select('*').from('Project_Contexts').where('projectId', id);
        project.actions = actions;
        project.contexts = contexts;
        res.status(201).json({ project });
    }
    catch(error) {
        res.status(500).json({ message: 'Could not retrive project' })
    }
})



server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})