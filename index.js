const express = require('express');
const server = express();
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);


server.use(express.json())

server.get('/api/projects', async(req, res) => {
    // get the roles from the database
    try {
        const projects = await db('projects'); // all the records from the table
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json(error);
    }
});


// list a role by id
// server.get('/api/projects/:id', async(req, res) => {
//     // get the roles from the database
//     try {
//         const project = await db('projects')
//             .where({ id: req.params.id })
//             .first();
//         res.status(200).json(project);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });


server.get('/api/projects/:id', async(req, res) => {
    try {
        const project = await db('projects')
            .where({ id: req.params.id })
            .first()
            .then(project => {
                if (project) {
                    db('action')
                        .where({ project_id: req.params.id })
                        .then(action => {
                            project.action = action
                            res.status(200).json(project)
                        })
                        .catch(err => {
                            res.status(500).json({ err })
                        })
                } else {
                    res.status(404).json({ message: 'User Not FOund' })
                }
            })
    } catch (err) {
        res.status(500).json({ err });
    }
})







// create project
server.post('/api/projects', async(req, res) => {
    try {
        const [id] = await db('projects').insert(req.body);

        const project = await db('projects')
            .where({ id })
            .first();

        res.status(201).json(project);
    } catch (error) {
        const message = errors[error.errno] || 'We ran into an error';
        res.status(500).json({ message, error });
    }
});

server.put('/api/projects/:id', async(req, res) => {
    try {
        const count = await db('projects')
            .where({ id: req.params.id })
            .update(req.body);

        if (count > 0) {
            const project = await db('projects')
                .where({ id: req.params.id })
                .first();

            res.status(200).json(project);
        } else {
            res.status(404).json({ message: 'Records not found' });
        }
    } catch (error) {}
});


server.delete('/api/projects/:id', async(req, res) => {
    try {
        const count = await db('projects')
            .where({ id: req.params.id })
            .del();
        res.status(200).json({ message: 'Deleted Succesfully' })
        if (count > 0) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Records not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Not Able to fulfill request' })
    }
});


server.post('/api/actions', async(req, res) => {
    try {
        const [id] = await db('action').insert(req.body);

        const project = await db('action')
            .where({ id })
            .first();

        res.status(201).json(project);
    } catch (error) {
        const message = errors[error.errno] || 'We ran into an error';
        res.status(500).json({ message, error });
    }
});





const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));