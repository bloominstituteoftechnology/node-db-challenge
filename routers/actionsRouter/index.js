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
        // if result return new action created
        if (result[0]) {
          const action_id = result[0];
          DB.getAction(action_id, id)
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

// DELETE AN ACTION BASED ON ACTION ID AND PROJECT ID
router.delete("/:id/actions/:action_id", (req, res) => {
  const { id, action_id } = req.params;

  DB.getAction(action_id, id)
    .then(action => {
      // check if action exists
      if (action.length) {
        DB.deleteAction(action_id)
          .then(result => {
            if (result) {
              res.json({ action, result });
            } else {
              res.status(400).json({ error: "This action was not deleted" });
            }
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: "Try again error code: NOACTIDRESDEL" });
          });
      } else {
        res.status(404).json({ erorr: "This action does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "error code: NODELACTID" });
    });
});

// UPDATE AN ACTION BY PROJECT ID AND ACTION ID
router.put("/:id/actions/:action_id", (req, res) => {
  const { id, action_id } = req.params;
  const { action } = req.body;
  // check if action is truthy
  if (action) {
    DB.updateAction(action_id, id, action)
      .then(result => {
        // check if result is true
        if (result) {
          DB.getAction(action_id, id)
            .then(action => {
              res.json({ action, message: "updated action" });
            })
            .catch(err => {
              res.status(500).json({ error: "NOACTUDPID" });
            });
        } else {
          res.status(401).json({ error: "Action not updated, try again." });
        }
      })
      .catch(err => {
        res.status(500).json({ error: "error code: NOACTUDP" });
      });
  } else {
    res
      .status(401)
      .json({ error: "Please enter new information to update an action." });
  }
});

module.exports = router;
