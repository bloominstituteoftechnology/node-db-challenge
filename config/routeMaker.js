const express = require("express");

module.exports = (db, resource) => {

    const truthyConverter = obj =>{
        obj ={...obj, complete:!!(obj.complete)}
        return obj
    }

  const sendError = (status, errorMessage, res) => {
    res.status(status).json({ error: errorMessage });
  };
  const route = express.Router();

  route.get("/", async (req, res) => {
    try {
      const items = await db(resource);
      const booleanCheck = items.map(item => truthyConverter(item))
      res.status(200).json(booleanCheck);
    } catch (err) {
      sendError(500, `Server error. ${resource} could not be found.`, res);
    }
  });

  route.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const item = await db(resource).where({ id }).first();
      if (resource === "projects") {
        let projectJoin = truthyConverter(item);
        let actions = await db('actions').where({"project_id":id}).select('id', 'description','notes', 'complete')
        actions = actions.map(action => truthyConverter(action))
        projectJoin = {...projectJoin, actions:actions}
        res.status(200).json(projectJoin);
        return;
      }

      if (item) {
          const booleanCheck = truthyConverter(item)
        res.status(200).json(booleanCheck);
        return;
      }
      throw err;
    } catch (err) {
      sendError(404, `no ${resource} found at that id.`, res);
    }
  });


  route.post("/", async (req, res) => {
    try {
      const body = req.body;
      if (resource === "projects") {
        if (!body.name || !body.description) {
          sendError(400, `Name and description required`, res);
          return;
        }
      }
      if (resource === "actions") {
        if (!body.project_id || !body.notes || !body.description) {
          sendError(400, `Action must have notes, description and project_id`);
          return;
        }
      }
      const id = await db(resource).insert(body);
      const newItem = await db(resource).where({ id: id[0] }).first();
      res.status(201).json(truthyConverter(newItem));
    } catch (err) {
      sendError(500, `${resource} could not be added.`, res);
    }
  });

  route.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const count = await db(resource)
        .where({ id })
        .update(body);
      if (!count) {
        sendError(400, `${resource} was not altered`);
      }
      const updatedItem = await db(resource).where({ id }).first();
      res.status(201).json({ updated: truthyConverter(updatedItem)  });
    } catch (err) {
      sendError(500, `${resource} could not be altered.`, res);
    }
  });

  route.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const item = await db(resource).where({ id }).first();
      if (!item) {
        sendError(400, `No ${resource} at that id.`, res);
        return;
      }
      const count = await db(resource)
        .where({ id })
        .del();
      if (count) {
        res.status(200).json({ deleted: truthyConverter(item)  });
      }
    } catch (err) {
      sendError(500, `${resource} could not be removed.`, res);
    }
  });

  return route;
};
