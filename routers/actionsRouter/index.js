const express = require("express");
const DB = require("../../data/helpers");
const router = express.Router();

// ADD A NEW ACTION TO A PROJECT
router.post("/:id/actions", (req, res) => {
  const { action } = req.body;
  const { id } = req.params;
  // check if action has a description
  if (action.description.length) {
    // if action has desc we want to add the project id to action
    const newAction = Object.assign({}, action, { project_id: id });

    DB.addAction(newAction)
      .then(result => {
        result = result[0];
        // if result return new action created
        if (result) {
          DB.getAction(result)
            .then(action => {
              action = action[0];
              res.status(201).json({ action });
            })
            .catch(err => {
              res.status(500).json({ error: "error code: NOACTIDCRE" });
            });
        } else {
          res.status(400).json({ error: "error code: RESNOLENG" });
        }
      })
      .catch(err => {
        res.status(500).json({ error: "error code: NOPOSTACT" });
      });
  } else {
    res
      .status(401)
      .json({ error: "Please enter a description to create a new action" });
  }
});

// VIEW AN ACTION BY ID
router.get("/:id/actions/:action_id", (req, res) => {
  const { id, action_id } = req.params;
  // only return an action if both the action id and project id match in DB
  DB.getAction(action_id, id)
    .then(action => {
      if (action.length) {
        res.json({ action });
      } else {
        res.status(404).json({ error: "action does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "error code: NOSINGACTIDGT" });
    });
});

// VIEW ALL ACTIONS FOR PROJECT ID
router.get("/:id/actions", (req, res) => {
  // setup id for project
  const { id } = req.params;

  // access helper method getActions
  DB.getActions(id)
    .then(actions => {
      // check if actions.length is truthy
      if (actions.length) {
        res.json({ actions });
      } else {
        res
          .status(404)
          .json({ error: "There are no actions related to this project" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "error code: NOACTFORID" });
    });
});

module.exports = router;
