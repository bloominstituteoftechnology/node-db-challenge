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


//========== ENDPOINTS ==========//
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


server.listen(port, function() {
    console.log(`\n API RUNNING ON PORT ${port} \n`);
  });