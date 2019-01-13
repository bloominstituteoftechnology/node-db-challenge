const express = require('express');
const projectsRouter = require('./routers/projectsRouter.js');
const actionsRouter = require('./routers/actionsRouter.js');
const PORT = 4500;
const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

//beginning of /api/projects endpoints

//POST /api/projects
server.post('/api/projects', (req, res) => {
    const project = req.body;
    db('projects').insert(project)
        .then(id => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to insert project.  Please make sure there is a project_name a project_description and a project_completed' });
        });
});

//GET /api/projects
server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to find projects' });
        });
});

//GET BY ID /api/projects/:id
// server.get('/api/projects/:id', (req, res) => {
//     const { id } = req.params;
//     db('projects').where('id', id)
//         .then(project => {
//             res.status(200).json(project);
//         })
//         .catch(err => {
//             res.status(500).json({ errorMessage: 'Failed to find project with that id.' });
//         });
// });

server.get('/api/projects/:id', (req, res) => {
	const { id } = req.params; 
	db('projects').where('id', id)
		.then(projects => {
            if(projects) {
                db('actions').where('project_id', id)
                    .then(actions => {
                        projects.actions = actions;
                        res.status(200).json(projects);
                    })
            }
			// if (projects) {
			// 	db('actions').where('project_id', project_id) 
			// 		.then(actions => {
			// 			projects.actions = actions; 
			// 			res.status(200).json(projects); 
			// 		})
			// 		.catch((err) => res.status(500).json({ message: 'ERRO 22R', err })); 
			// } else {
			// 	res.status(404).json({ message: 'Project not found' });
            // }

		})
		.catch((err) => {
			res.status(500).json({ errorMessage: 'Failed to find project with that id.' });
		});
});


// PUT /api/projects/:id
server.put('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    const project = req.body;
    db('projects').where('id',id).update(project)
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to update Project.' });
        });
});

// DELETE /api/projects/:id
server.delete('/api/projects/id', (req, res) => {
    const { id } = req.params;
    db('projects').where('id', id).del()
        .then(project => {
            res.json(project);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to delete project.' });
        });
});

//end of /api/projects endpoints

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})