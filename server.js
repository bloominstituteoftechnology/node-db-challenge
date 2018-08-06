const express = require('express');
const db = require('./data/db');
const server = express();

server.use(express.json());


server.get('/', (req, res) => {
  res.send('Hello World');
});

//*********PROJECT ENDPOINTS***************

server.get('/projects', (req, res) => {
	db('Projects').then(projects=> {
		res.status(200).json(projects);
	}).catch(err => res.status(500).json(err));
});


server.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    db('Projects').where({id: Number(id)})
    .then(response => {
        res.status(200).json(response);
    }).catch(err => {
        res.status(500).json({error: 'Unable to retrieve user information.'})
    })
});

server.post('/projects', (req, res) => {
	const project = req.body;
	db.insert(project).into('Projects')
	.then(ids => {
		const id = ids[0];
		res.status(201).json({ id, ...project })
	}).catch(err => res.status(500).json(err));
});

server.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const project = req.body;
    db('Projects').where({id: Number(id)})
    .update(project)
    .then(response => {
        res.status(201).json({response})
    }).catch(err => {res.status(500).json(err)
    })
});

server.delete('/projects/:id', (req, res) => {
    const { id } = req.params;
    const project = req.body;
    db('Projects').where({id: Number(id)})
    .delete(project)
    .then(response => {
        res.status(201).json({response})
    }).catch(err => {res.status(500).json(err)
    })
});

//*********ACTIONS ENDPOINTS***************

server.get('/actions', (req, res) => {
	db('Actions').then(actions=> {
		res.status(200).json(actions);
	}).catch(err => res.status(500).json(err));
});


server.get('/actions/:id', (req, res) => {
    const { id } = req.params;
    db('Actions').where({id: Number(id)})
    .then(response => {
        res.status(200).json(response);
    }).catch(err => {
        res.status(500).json({error: 'Unable to retrieve user information.'})
    })
});

server.post('/actions', (req, res) => {
	const action = req.body;
	db.insert(action).into('Actions')
	.then(ids => {
		const id = ids[0];
		res.status(201).json({ id, ...action })
	}).catch(err => res.status(500).json(err));
});

server.put('/actions/:id', (req, res) => {
    const { id } = req.params;
    const action = req.body;
    db('Actions').where({id: Number(id)})
    .update(action)
    .then(response => {
        res.status(201).json({response})
    }).catch(err => {res.status(500).json(err)
    })
});

server.delete('/actions/:id', (req, res) => {
    const { id } = req.params;
    const action = req.body;
    db('Actions').where({id: Number(id)})
    .delete(action)
    .then(response => {
        res.status(201).json({response})
    }).catch(err => {res.status(500).json(err)
    })
});

//*********PROJECT_ACTION ENDPOINT******************

server.get('/project/:id', (req, res) => {
    const { id } = req.params;
    db('Actions as a')
    .join('Projects as p', 'a.p', 'p.id')
    .select('a.*', 'p.name as actionBy')
    .where('a.actionId', id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: 'This Project information could not be retrieved.'})
    })
})



const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
