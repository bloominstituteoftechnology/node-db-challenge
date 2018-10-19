const express = require("express");
const db = require("./actionsModels.js");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    db.getActions()
      .then(actions => res.status(201).json(actions))
      .catch(err =>
        res.status(500).json({ error: "The action(s) could not be found." })
      );
  })
  .post((req, res) => {
    const action = req.body;
    db.addAction(action)
      .then(newAction => res.status(201).json(newAction))
      .catch(err =>
        res
          .status(500)
          .json({ error: "Action(s) could not be added at this time." })
      );
  });

module.exports = router;
