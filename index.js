const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here

//GET
server.get('/', (req, res) => {
    res.send("It's Alive");
});

server.get('/api/projects', (req, res) => {
    db('projects')
	.then(projects => {
	    res.status(200).json(projects);
	})
	.catch(err  => res.status(500).json(err));
});

server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    db('projects').where({id}).first()
	.then(proj => {
	    if (proj) {
		db('actions')
		    .where({project_id: id})
		    .then(acts => {
			proj.acts = acts;
			res.status(200).json(proj);
		    })
		    .catch(err => res.status(404).json(err));
	    } else {
		res.status(404).json({error: `no project here`});
	    }
	})
	.catch(err => res.status(500).json(err));
});

// server.get('/api/projects/:id', (req, res) => {    
//     const { id } = req.params;
//     db('projects').where('project_id', '=',id)
//         .then(actions => {	    
// 	    if (actions) {
// 		res.status(200).json(actions);		
// 	    } else {
// 		res.status(404).json({ message: 'actions not found' });
// 	    }
// 	} 
// 	     )
// 	.catch(err => console.error(err));
// });

//POST
server.post('/api/projects', (req, res) => {
    const project = req.body;
    db.insert(project)
	.into('projects')
	.then(ids => {
	    res.status(201).json(ids[0]);
	})
	.catch(err => {
	    res.status(500).json(err);
	});
});

server.post('/api/projects/actions', (req, res) => {
    const action = req.body;
    db.insert(action)
	.into('actions')
	.then(ids => {
	    res.status(201).json(ids[0]);
	})
	.catch(err => {
	    res.status(500).json(err);
	});
});

// //DELETE
// server.delete('/api/cohorts/:id', (req, res) => {
//     const {id} = req.params;
//     db('cohorts')
// 	.where({id})
// 	.del()
// 	.then(count => {
// 	    if (!count || count < 1) {
// 		res.status(404).json({message: 'No records found to remove'});
// 	    } else {
// 		res.status(200).json(count);
// 	    }
// 	})
// 	.catch(err => res.status(500).json(err));
// });


// //PUT
// server.put('/api/cohorts/:id', (req, res) => {
//     const {id} = req.params;
//     const changes = req.body;
//     db('cohorts')
// 	.where({id})
// 	.update(changes)
// 	.then(count => {
// 	    res.status(200).json(count);
// 	})
// 	.catch(err => res.status(500).json(err));
// });

const port = 3300;
server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});

