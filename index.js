const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const server = express();
const port = 9000;

server.use(helmet());
server.use(express.json());

// Program Check

server.get('/', (req, res) => {
	res.send("Red Sox World Champs!!")
});

// Project Section

server.get('/projects', (req, res) => {
	db('projects')
	 .then(projects => {
	 	console.log(`\n== PROJECTS LOCATED ==\n`, projects)
	 	res
	 	  .status(200)
	 	  .json(projects);
	 })
	 .catch(err => {
	 	console.log(`\n== CANNOT LOCATE PROJECTS ==\n`, err)
	 	res
	 	  .status(500)
	 	  .json({ error: "Error while locating projects." })
	 });
})

server.get('/projects/:id', (req, res) => {
	const { id } = req.params;

	db('projects')
	 .where('id', id)
	 .then(project => {
	 	if (!project.length) {
	 		console.log(`\n ==PROJECT ID NOT LOCATED ==\n`)
	 		res
	 		  .status(401)
	 		  .json({ error: "No project is associated with specified ID." });
	 	}
	 	db('actions')
	 	  .where('project_id', id)
	 	  .then(actions => {
	 	  	project[0].actions = actions;
	 	  	console.log(`\n == PROJECT LOCATED ==\n`)
	 	  	res
	 	  	  .status(200)
	 	  	  .json(project)
	 	  })
	 	  .catch(err => {
            console.log(`\n== CANNOT LOCATE PROJECT ==\n`, err)
            res
              .status(500)
              .json({ error: "Error while locating project."})
          })
	 })
})

server.post('/projects', (req, res) => {
	const project = req.body;
	const { name } = req.body;
	if (!name) {
		console.log(`\n == NAME REQUIRED FOR PROJECT ==\n`)
		res
		  .status(400)
		  .json({ error: "Name must be added to this project. Enter Name" })
	}

	db.insert(project)
	  .into('projects')
	  .then(ids => {
	  	console.log(`\n == SUCCESSFULLY ADDED PROJECT ==\n`, project)
	  	res
	  	 .status(201)
	  	 .json(ids);
	  })
	  .catch(err => {
	  	console.log(`\n == PROJECT NOT ADDED == \n`, err)
	  	res
	  	  .status(500)
	  	  .json({ error: "Error saving project." })
	  });
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  db('projects')
    .where('id', id)
    .del()
    .then(deleted => {
      console.log(`\n== PROJECT REMOVED ==\n`, deleted)
      res
        .status(200)
        .json(deleted);
    })
    .catch(err => {
      console.log(`\n== CANNOT REMOVE PROJECT ==\n`, err)
      res
        .status(500)
        .json({ error: "Error while removing project." })
    })
})

/* == Actions == */

server.get('/actions', (req, res) => {
  db('actions')
    .then(actions => {
      console.log(`\n== ACTIONS LOCATED ==\n`)
      res
        .status(200)
        .json(actions)
    })
    .catch(err => {
      console.log(`\n== CANNOT LOCATE ACTIONS ==\n`, err)
      res
        .status(500)
        .json({error: "Error while locating actions." })
    });
})

server.get('/actions/:id', (req, res) => {
  const { id } = req.params;

  db('actions')
    .where('id', id)
    .then(action => {
      if (!action.length) {
        console.log(`\n== ACTION ID NOT LOCATED ==\n`)
        res
          .status(401)
          .json({ error: "There is no action with the specified ID." })
      }
      console.log(`\n== ACTION LOCATED ==\n`)
        res
          .status(200)
          .json(action)
    })
    .catch(err => {
      console.log(`\n== CANNOT LOCATE ACTION ==\n`, err)
      res
        .status(500)
        .json({ error: "Error while locating action." })
    })
})


server.post('/actions', (req, res) => {
  const action = req.body;

  db.insert(action)
    .into('actions')
    .then(ids => {
      console.log(`\n== ACTION ADDED ==\n`)
      res
        .status(201)
        .json(ids);
    })
    .catch(err => {
      console.log(`\n== CANNOT ADD ACTION ==\n`, err)
      res
        .status(500)
        .json({ error: "Error while saving action." })
      })
});

server.put('/actions/:id', (req, res) => {
  const action = req.body;
  const { id } = req.params;

  db('actions')
    .where('id', id)
    .update(action)
    .then(update => {
      console.log(`\n== ACTION UPDATED ==\n`, update)
      res
        .status(200)
        .json(update);
    })
    .catch(err => {
      console.log(`\n== CANNOT UPDATE ACTION ==\n`, err)
      res
        .status(500)
        .json({ error: "Error while updating action." });
    })
})

server.delete('/actions/:id', (req, res) => {
  const { id } = req.params;

  db('actions')
    .where('id', id)
    .del()
    .then(deleted => {
      console.log(`\n== ACTION DELETED ==\n`, deleted)
      res
        .status(200)
        .json(deleted);
    })
    .catch(err => {
      console.log(`\n== CANNOT DELETE ACTION ==\n`, err)
      res
        .status(500)
        .json({ error: "Error while deleting action." })
    })
})


server.listen(port, () => console.log(`\n== API RUNNING ON ${port} ==\n`))








