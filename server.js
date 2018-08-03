const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const db = require('./database/db');

const port = 8000;
const server = express();

server.use (express.json());


server.get('/', (req, res) => {

  res.send('Hello World <br><h1>Sprint Challenge - RDBMS: working on MVP</h1> <h3>Sam Khaled</h3>');
});

server.get('/projects', (req, res) => {
	db('projects')
		.then(projects => {
			res.status(200).json(projects);
		})
		.catch(error => {
			res.status(500).json(error);
		})
});

server.get('/actions', (req, res) => {
	db('actions')
		.then(actions => {
			res.status(200).json(actions);
		})
		.catch(error => {
			res.status(500).json(error);
		})
});



 server.get('/projects/:id', (req, res) => {
	const { id } = req.params;
 	db('projects').where({ id })
		.then(projects => {
			if (projects.length > 0) {
				res.status(200).json(projects);
			} else {
				res.status(404).json({message: 'Unable to retrieve the specified project ID'});
			}
		})
		.catch(error => {
			res.status(500).json(error);
		})
});
 server.get('/actions/:id', (req, res) => {
	const { id } = req.params;
 	db('actions').where({ id })
		.then(actions => {
			if (actions.length > 0) {
				res.status(200).json(actions);
			} else {
				res.status(404).json({message: 'Unable to retrieve the specified action ID'});
			}
		})
		.catch(error => {
			res.status(500).json(error);
		})
});



server.post('/projects', (req, res) => {
	
		db('projects').insert(req.body)
			.then(() => {
				res.status(201).json({message: 'Successfully added a new projects.'})
			})
			.catch(error => {
				res.status(500).json(error);
			});
	
});

server.post("/actions", (req, res) => {

  		db('actions').insert(req.body)
  			.then(() => {
				res.status(201).json({message: 'Successfully added a new action.'})
			})
			.catch(error => {
				res.status(500).json(error);
			});
});

server.put('/projects/:id', (req, res) => {
	const { id } = req.params;
	const newproject = req.body;
	if (!id) {
		res.status(404).json({message: 'Please provide a project id.'});
	} else if (!newproject) {
		res.status(404).json({message: 'Please provide updated information.'});
	} else {
		db('projects').where({ id }).update(newproject)
			.then(() => {
				res.status(201).json({message: 'Successfully updated project.'})
			})
			.catch(error => {
				res.status(500).json(error);
			})
	}
});

server.put('/actions/:id', (req, res) => {
	const { id } = req.params;
	const updatedaction = req.body;
 	if (!updatedaction) {
		res.status(404).json({message: 'Please provide an action id.'});
	} else {
		db('actions').where({ id }).update(updatedaction)
			.then(() => {
				res.status(201).json({message: 'action successfully updated'});
			})
			.catch(error => {
				res.status(500).json(error);
			})
	}
});


server.delete('/projects/:id', (req, res) => {
	const { id } = req.params;
 	db('projects').where({ id }).del()
		.then(() => {
			res.status(200).json({message: 'projects deleted successfully'});
		})
		.catch(error => {
			res.status(500).json(error);
		})
});

server.delete('/actions/:id', (req, res) => {
	const { id } = req.params;
	db('actions').where({ id }).del()
		.then(() => {
			res.status(201).json({message: 'Successfully deleted action.'});
		})
		.catch(error => {
			res.status(500).json(error);
		})
})


// server.listen(port, () => console.log(`\n Server is running on http://localhost:${port} === \n`));
server.listen(port, function() {
	console.log(`\n Server is running on http://localhost:${port} === \n`);
});