const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const dbConfigure = require("./knexfile");
const db = knex(dbConfigure.development);
const server = express();
const port = 9000;

server.use(helmet());
server.use(express.json());

//======== MIDDLEWARE =========//
function verifyProject(req, res, next) {
    const id = req.body.project_id;
    db("projects")
      .where({ id: id })
      .then(project => {
        if (project.length === 0) {
          res.status(404).json({ message: "The project needs an ID" });
        } else next();
      })
      .catch(err => res.status(500).json(err));
  }

//========== PROJECT ENDPOINTS ==========//
server.get('/', (req, res) => {
	res.send('<h2>Server is running.</h2>');
})

// GET PROJECTS
server.get("/api/projects", (req, res) => {
    db("projects")
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(err =>
        res
          .status(500)
          .json({ error: "Uh oh! The project could not be retrieved." })
      );
  });

  // POST
  server.post("/api/projects", (req, res) => {
    const project = req.body;
    if (!project.name || !project.comments) {
      res
        .status(400)
        .json({ error: "This project needs a name and comments!" });
    } else
      db.insert(project)
        .into("projects")
        .then(ids => {
          res.status(201).json(ids);
        })
        .catch(err =>
          res
            .status(500)
            .json({ error: "Uh oh! The project could not be saved." })
        );
  });

  // GET ID
  server.get('/api/projects/:id', (req, res) => {
    const id = req.params.id;
     db("projects")
        .select()
        .where("id", id)
        .then(projects => {
            if(projects){
                res.status(200).json(projects);
            }else{
                res.status(404).json({message: "Uh oh! There is no project with this ID!"});
            }
  
        })
        .catch(err => res.status(500).json(err));
  });
 
  // DELETE
  server.delete("/api/projects/:id", (req, res) => {
    const { id } = req.params;
    db("projects")
      .where({ id: id })
      .del()
      .then(count => {
        if (count) {
          res
            .status(200)
            .json({ message: "The project was successfully deleted!" });
        } else {
          res
            .status(404)
            .json({ message: "Uh oh! There is no project with this ID!" });
        }
      })
      .catch(err =>
        res.status(500).json({ error: "Uh oh! The project couldn't be deleted!" })
      );
});

// PUT
server.put("/api/projects/:id", (req, res) => {
    const { id } = req.params;
    const project = req.body;
    if (!project.name || !project.comments) {
      res
        .status(400)
        .json({ error: "This project needs a name and comments!" });
    } else
      db("projects")
        .where({ id: id })
        .update(project)
        .then(count => {
          if (count) {
            res
              .status(200)
              .json({ message: "The project was successfully updated." });
          } else {
            res
              .status(404)
              .json({ message: "Uh oh! There is no project with this ID!" });
          }
        })
        .catch(err =>
          res
            .status(500)
            .json({ error: "Uh oh! The project couldn't be updated" })
        );
  });

//========== ACTION ENDPOINTS ==========//
// GET ACTIONS
server.get("/api/actions", (req, res) => {
    db("actions")
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(err =>
        res
          .status(500)
          .json({ error: "Uh oh! The actions could not be retrieved." })
      );
  });

// POST
server.post("/api/actions", verifyProject, (req, res) => {
    const action = req.body;
    if (!action.comments || !action.notes) {
      res
        .status(400)
        .json({
          error: "Please provide a comments and comments for this action."
        });
    } else
      db.insert(action)
        .into("actions")
        .then(ids => {
          res.status(201).json(ids);
        })
        .catch(err =>
          res
            .status(500)
            .json({ error: "Uh oh! There was an error saving the action." })
        );
  });

  // GET ID
  server.get("/api/actions/:id", (req, res) => {
    const { id } = req.params;
    db("actions")
      .where({ id: id })
      .then(action => {
        if (action.length === 0) {
          res
            .status(404)
            .json({ message: "Uh oh! There is no action with this ID!" });
        } else res.status(200).json(action);
      })
      .catch(err => res.status(500).json(err));
  });

  // DELETE
  server.delete("/api/actions/:id", (req, res) => {
    const { id } = req.params;
    db("actions")
      .where({ id: id })
      .del()
      .then(count => {
        if (count) {
          res
            .status(200)
            .json({ message: "The action was successfully deleted." });
        } else {
          res
            .status(404)
            .json({
              message: "Uh oh! The action with the specified ID does not exist."
            });
        }
      })
      .catch(err =>
        res.status(500).json({ error: "Uh oh! The action could not be deleted." })
      );
  });

  // PUT
  server.put("/api/actions/:id", verifyProject, (req, res) => {
    const { id } = req.params;
    const action = req.body;
    if (!action.comments || !action.notes) {
      res
        .status(400)
        .json({
          error: "Please provide comments and a comments for this action."
        });
    } else
      db("actions")
        .where({ id: id })
        .update(action)
        .then(count => {
          if (count) {
            res
              .status(200)
              .json({ message: "The action was successfully updated." });
          } else {
            res
              .status(404)
              .json({
                message: "Uh oh! The action with the specified ID does not exist."
              });
          }
        })
        .catch(err =>
          res
            .status(500)
            .json({ error: "Uh oh! The action could not be updated!" })
        );
  });

//=== SERVER PORT ===//
server.listen(port, function() {
    console.log(`\n API RUNNING ON PORT ${port} \n`);
  });