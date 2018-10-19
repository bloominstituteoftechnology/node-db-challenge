const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const DB = knex(knexConfig.development);

const app = express();
const port = 3333;

app.use(express.json());
app.use(helmet());
app.listen(port, console.log(`== Server Listening on Port ${port}`))

// endpoints here

//GET
app.get('/', (req, res) => {
    res.send("It's Alive");
});

app.get('/api/projects', (req, res) => {
  DB('projects')
	  .then(projects => {
	    res.status(200).json(projects);
	   })
	  .catch(err  => res.status(500).json(err));
  });

app.get('/api/projects/:id', (req, res) => {
  const id = req.params.id;
    DB('projects')
      .where({id}).first()
	    .then(proj => {
	    if (proj) {
		    DB('actions')
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

app.post('/api/projects', (req, res) => {
    const { name, description, completed } = req.body;
    DB.insert({ name, description, completed })
	    .into('projects')
	    .then(ids => {
	       res.status(201).json(ids[0]);
	    })
	    .catch(err => {
	       res.status(500).json(err);
	    });
});

app.post('/api/projects/actions', (req, res) => {
    const { description, notes, project_id, completed } = req.body;
    DB.insert({ description, notes, project_id, completed })
	    .into('actions')
	    .then(ids => {
	       res.status(201).json(ids[0]);
	     })
	     .catch(err => {
	       res.status(500).json(err);
	     });
});

app.delete('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    DB('projects')
	    .where({id})
	    .del()
	    .then(count => {
	    if (!count) {
		     res.status(404).json({message: 'No records found to remove'});
	    } else {
		     res.status(200).json(count);
	    }
	   })
	    .catch(err => res.status(500).json(err));
});

app.put('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    const { name, description, completed } = req.body;
    DB('projects')
	    .where({id})
	    .update(changes)
	    .then(count => {
	    res.status(200).json(count);
	    })
	    .catch(err => res.status(500).json(err));
});
