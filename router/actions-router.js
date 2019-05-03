const router = require("express").Router();

const Actions = require("./actions-model");

router.get("/actions/", (req, res) => {
    Actions.find()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: " we ran into error retrieving the action" });
    });
});

module.exports = router;