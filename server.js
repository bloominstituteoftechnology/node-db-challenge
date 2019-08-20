
const express = require("express");
const server = express();

const projectDB = require("./data/helpers/projectModel.js");
const actionDB = require("./data/helpers/actionModel.js");
const resourceDB = require("./data/helpers/resourceModel.js");

server.use(express.json());

//get projects and actions and resources
server.get("/api/projects", async (req, res) => {
  try {
    const projects = await projectDB.get();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "the project information could not be received."
    });
  }
});

server.get("/api/actions", async (req, res) => {
  try {
    const actions = await actionDB.get();
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "the action information could not be received"
    });
  }
});

server.get("/api/resources", async (req, res) => {
  try {
    const resources = await resourceDB.get();
    res.status(200).json(resources);
  } catch (error) {
    res
      .status(500)
      .json({ error: "the resource information could not be retreived" });
  }
});

//get projects and actions and resources by id:
server.get("/api/projects/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const project = await projectDB.get(id);
    if (id) {
      res.status(200).json(project);
    } else {
      res.status(400).json({
        message: "the project with that ID does not exist"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Unable to retreive project"
    });
  }
});

server.get("/api/actions/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const action = await actionDB.get(id);
    if (id) {
      res.status(200).json(action);
    } else {
      res.status(400).json({
        message: "the action with that ID does not exist"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "unable to retrieve action"
    });
  }
});

server.get("/api/resources/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const resource = await resourceDB.get(id);
    if (id) {
      res.status(200).json(resource);
    } else {
      res
        .status(404)
        .json({ message: "the resource with that id does not exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "unable to retrieve resource" });
  }
});

//get all actions for project
server.get("/api/projects/:id/actions", (req, res) => {
  let { id } = req.params;
  projectDB
    .getProjectActions(id)
    .then(projectActions => {
      if (!projectActions.length) {
        res.status(404).json({
          error: "the actions for this project do not exist"
        });
      } else {
        res.status(200).json(projectActions);
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Unable to retreive information"
      });
    });
});

//get all resources for project
server.get("/api/projects/:id/resources", (req, res) => {
  let { id } = req.params;
  projectDB
    .getProjectResources(id)
    .then(projectResources => {
      if (!projectResources.length) {
        res
          .status(404)
          .json({ error: "the resources for this project do not exist" });
      } else {
        res.status(200).json(projectResources);
      }
    })
    .catch(error => {
      res.status(500).json({ message: "unable to retrieve information" });
    });
});

//add projects and actions and resources
server.post("/api/projects", async (req, res) => {
  let { name, description } = req.body;
  try {
    const addedProject = projectDB.insert({ name, description });
    if (!name || !description) {
      res.status(400).json({
        error: "Please provide name and description for the project."
      });
    } else {
      res.status(200).json(addedProject);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "The project information could not be retreived"
    });
  }
});

server.post("/api/actions", async (req, res) => {
  let { project_id, notes, description } = req.body;
  try {
    if (!project_id || !description || !notes) {
      res
        .status(400)
        .json({ message: "Please provide project ID, description, and notes" });
    } else {
      const addedAction = actionDB.insert(req.body);
      res.status(200).json(addedAction);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "The action information could not be retreived"
    });
  }
});

server.post("/api/resources", async (req, res) => {
  let { project_id, name, description } = req.body;
  try {
    if (!project_id || !name || !description) {
      res
        .status(400)
        .json({ message: "please provide project id, name, and description " });
    } else {
      const addedResource = resourceDB.insert(req.body);
      res.status(200).json(addedResource);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error posting resource" });
  }
});

//delete projects and actions and resources
server.delete("/api/projects/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const deleted = await projectDB.get(id);
    if (deleted) {
      await projectDB.remove(id);
      res.status(200).json({
        message: "the project has been deleted"
      });
    } else {
      res.status(404).json({
        message: "the project with the specified ID does not exist"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "The project could not be removed"
    });
  }
});

server.delete("/api/actions/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const deleted = await actionDB.get(id);
    if (deleted) {
      await actionDB.remove(id);
      res.status(200).json({
        message: "the action has been deleted"
      });
    } else {
      res.status(404).json({
        message: "the action with the specified ID does not exist"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "The action could not be removed"
    });
  }
});

server.delete("/api/resources/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const deleted = await resourceDB.get(id);
    if (deleted) {
      await resourceDB.remove(id);
      res.status(200).json({
        message: "the resource has been deleted"
      });
    } else {
      res
        .status(404)
        .json({ message: "the resource with that id does not exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "the resource could not be removed" });
  }
});

//update projects and actions and resources
server.put("/api/projects/:id", async (req, res) => {
  let { id } = req.params;
  let { name, description, completed } = req.body;
  try {
    const project = await projectDB.get(id);
    if (!name || !description) {
      res.status(400).json({
        message: "Please provide name and description for the project"
      });
    } else {
      await projectDB.update(id, { name, description, completed });
      res.status(200).json({
        message: "the project has been updated"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "The project information could not be received"
    });
  }
});

server.put("/api/actions/:id", async (req, res) => {
  let { id } = req.params;
  let { project_id, notes, description } = req.body;
  try {
    const action = await actionDB.get(id);
    if (!project_id || !description || !notes) {
      res.status(400).json({
        message:
          "Please provide project ID, description, and notes for the action."
      });
    } else {
      await actionDB.update(id, req.body);
      res.status(200).json({
        message: "the action has been updated"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "The action information could not be received."
    });
  }
});

server.put("/api/resources/:id", async (req, res) => {
  let { id } = req.params;
  let { project_id, name, description } = req.body;
  try {
    const resource = await resourceDB.get(id);
    if (!project_id || !name || !description) {
      res
        .status(400)
        .json({ message: "please provide project ID, name, and description " });
    } else {
      await resourceDB.update(id, req.body);
      res.status(200).json({ message: "the resource has been updated" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "the resource information could not be retrieved" });
  }
});

module.exports = server;