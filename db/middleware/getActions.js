//Purpose of this function is to get the actions by project id
const db = require("../dbConfig");

function getActions(req, res, next) {
  const { id } = req.params;
  const actions = []
  db("actions")
    .where({ project_id: id })
    .then(actions => {
      console.log(actions)
      actions.push(actions);
    })
    .catch(error => {
      res
        .status(500)
        .json({
          error,
          errorMessage: error.message,
          devMessage: "unable to obtain actions from project id"
        });
    });
  next();
}

module.exports = getActions;
