const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const projects = require("./data/helpers/projectHelper");
const actions = require("./data/helpers/actionHelper");

const server = express();

//middleware
server.use(express.json());
server.use(helmet());
server.use(cors({}));

//routing/endpoints

//projects
server.get("/projects", (req, res) => {
  projects
    .get()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  projects
    .get(id)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.get("/projects/:id/actions", (req, res) => {
  const { id } = req.params;
  projects
    .getProjectActions(id)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.post("/projects", (req, res) => {
  const project = req.body;
  projects
    .insert(project)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  projects
    .update(id, changes)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  projects
    .remove(id)
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      return error;
    });
});

//actions
server.get("/actions", (req, res) => {
  actions
    .get()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.get("/actions/:id", (req, res) => {
  const { id } = req.params;
  actions
    .get(id)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.post("/actions", (req, res) => {
  const action = req.body;
  actions
    .insert(action)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.put("/actions/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  actions
    .update(id, changes)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.delete("/actions/:id", (req, res) => {
  const { id } = req.params;
  actions
    .remove(id)
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      return error;
    });
});

server.listen(8000, () => console.log("\n=== API running... ===\n"));
