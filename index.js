const express = require('express');
const knex = require('knex');
const db_config = require('./knexfile.js');

const server = express();
const db = knex(db_config.development);
const PORT = 5678;

_ = require("lodash");

server.use(express.json());

const booleanMap = (...props) => {
    return function(obj){       
    return props.reduce((acc, next) => ({ ...acc, [next]: !!acc[next] }), obj);
        };
    };

/********* Get Projects *************/
server.get('/api/projects', (req, res) => {

    db('projects')
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

/********* Get Actions *************/
server.get('/api/actions', (req, res) => {

    db('actions')
        .then(actions => {
            res.json(actions);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

/********* Post New Project *************/
server.post('/api/projects', (req, res) => {
    const newProject = req.body;
    if (newProject.project) {
        console.log("newProject:", newProject)
        db('projects').insert(newProject)
            .then(ids => {
                res.status(201)
                    .json(ids);
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ message: "failed to insert project into db" })
            })
    } else {
        res
            .status(400)
            .json({ message: "missing contents" })
    }
});

/********* Post New Action *************/
server.post('/api/actions', (req, res) => {
    const newAction = req.body;
    if (newAction.description) {
        console.log("newAction:", newAction)
        db('actions').insert(newAction)
            .then(ids => {
                res.status(201)
                    .json(ids);
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ message: "failed to insert action into db" })
            })
    } else {
        res
            .status(400)
            .json({ message: "missing contents" })
    }
});

/********* Get Single Project with Actions *************/
/* server.get("/api/projects/:id", (req, res) => {
    const { id } = req.params;
    console.log("id", id);
    db('projects').leftJoin('actions', 'projects.id', 'actions.project_id')
        .where("projects.id", id)
        .then(project => {
            res.json(project);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}); */

/********* Get Single Action *************/
server.get("/api/actions/:id", (req, res) => {
    const { id } = req.params;
    db('actions')
        .where("actions.id", id)
        .then(action => {
            res.json(action);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

/************* Delete Project *************/
server.delete('/api/projects/:id', (req, res) => {
    const { id } = req.params
    db('projects')
        .where('id', id)
        .del()
        .then(delId => {
            res.json(delId);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The project could not be removed." });
        });
});

/************* Delete Action *************/
server.delete('/api/actions/:id', (req, res) => {
    const { id } = req.params
    db('actions')
        .where('id', id)
        .del()
        .then(actionId => {
            res.json(actionId);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The action could not be removed." });
        });
});


/********* Update Project *************/
server.put('/api/projects/:id', (req, res) => {
    const { id } = req.params
    const newProject = req.body
    db('projects')
        .where('id', id)
        .update(newProject)
        .then(updatedProject => {
            res
                .json(updatedProject);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The project could not be modified." });
        });
});

/********* Update Action *************/
server.put('/api/actions/:id', (req, res) => {
    const { id } = req.params
    const newAction = req.body
    db('actions')
        .where('id', id)
        .update(newAction)
        .then(updatedAction => {
            res
                .json(updatedAction);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The action could not be modified." });
        });
});

server.route("/api/projects/:id")
.get(function (req, res, next) {
//server.get("/api/projects/:id")
  //server.get(function (req, res, next) {
    const project = db("projects")
    //console.log("req.params.id", req.params.id)
      .where("projects.id", req.params.id)
      .first();
    const action = db("actions").where("project_id", req.params.id);

    Promise.all([project, action])
    .then(([project, action]) => {
      if (!project) {
        return res.status(400).json({ message: "the project was not found" });
      }

      let result = booleanMap("complete")(project);
      result.action = action.map(action =>
        _.omit(booleanMap("complete")(action), "project_id"));
      res.status(200).json(result);
    })
      .catch(next);
  });

/************* End of CRUD  *************/

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});