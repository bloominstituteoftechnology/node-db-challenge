const express = require('express');
const db = require('./data/db');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.json({ msg: 'Working' });
});

server.get('/project', (req, res) => {
    db('project')
        .then(projects => {
            res.status(200).json(projects);
    })
        .catch(err => {
            res.status(500).json({ err: 'Failed to retrieve projects' });
    })
});

server.get('/project/:id', (req, res) => {
    const { id } = req.params;
    db('project')
      .where({ id })
      .first()
      .then(project => {
        if (project) {
          db('actions')
            .where({ id: id })
            .then(actions => {
              project.actions = actions;
              res.status(200).json(project);
    })
            .catch(err => {
              res.status(500).json(err)});
      }
        res.status(404).json({ msg: "Project does not exist" });
    })
        .catch(err => {
          res.status(500).json(err);
    })
});

server.post('/project', (req, res) => {
    const projects = req.body;
  
    db.insert(projects)
    .into('project')
    .then(ids => {
      const id = ids[0];
      res.status(201).json({ id, ...projects });
    })
    .catch(err => res.status(500).json({ err: "Not posting project"}));
});

server.put("/project/:id", (req, res) => {
    const { id } = req.params;
    const text = req.body;
        if (!text) {
          res.status(400).json({ err: "Missing post body" });
        }
        db("project")
          .where("id", Number(id))
          .update(text)
          .then(post => {
            if (!post) {
              res.status(404).json({ err: "project does not exist" });
        }
              res.status(200).json(text);
        })
          .catch(err => {
            res
              .status(500)
              .json({ err: "Failed to modify project" });
        });
});

server.delete("/project/:id", (req, res) => {
    const { id } = req.params;
      db("project")
      .where("id", Number(id))
      .delete()
      .then(projects => {
        if (projects === 0) {
          res.status(404).json({ msg: "Project does not exist" });
        }
          res.status(200).json({ msg: "Project deleted" });
      })
      .catch(err => {
          res.status(500).json({ err: "Project not deleted" });
      });
  });

server.get('/actions', (req, res) => {
    db('actions')
      .then(actions => {
          res.status(200).json(actions);
      })
      .catch(err => {
          res.status(500).json({ err: "Failed to retrieve actions"});
      })
});

server.get("/actions/:id", (req, res) => {
    const { id } = req.params;
    db("actions")
      .where("id", Number(id))
      .then(action => {
        if (action.length === 0) {
          res.status(404).json({ msg: "Action does not exist" });
        }
          res.status(200).json(action);
      })
      .catch(err => {
        res.status(500).json({ err: "Failed to retrieve info" });
      });
  });

  server.post("/actions", (req, res) => {
    const action = req.body;
    db.insert(action)
      .into("actions")
      .then(ids => {
        const id = ids[0];
        res.status(201).json({ id, ...action });
      })
      .catch(err => {
        res.status(500).json({ err: "Failure saving to database" });
      });
  });

server.delete("/actions/:id", (req, res) => {
    const { id } = req.params;
      db("actions")
      .where("id", Number(id))
      .delete()
      .then(actions => {
        if (actions === 0) {
          res.status(404).json({ msg: "Action does not exist" });
        }
          res.status(200).json({ msg: "Action deleted" });
      })
      .catch(err => {
          res.status(500).json({ err: "Action not deleted" });
      });
  });

server.put("/actions/:id", (req, res) => {
    const { id } = req.params;
    const action = req.body;
    if (!action) {
      res.status(400).json({ msg: "Action needs body" });
    }
    db("actions")
      .where("id", Number(id))
      .update(action)
      .then(action => {
        if (!action) {
          res.status(404).json({ msg: "Action does not exist" });
        }
        res.status(200).json(action);
      })
      .catch(err => {
        res.status(500).json({ err: "The action information could not be modified." });
      });
  });

const port = 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});