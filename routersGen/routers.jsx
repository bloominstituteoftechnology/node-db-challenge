const router = require("express").Router();
console.log("routers.jsx");

const {
  getAll,
  createNew,
  getIndividual,
  deleteIndividual,
  updateIndividual
} = require("./controllers.jsx");

router
  .route("/resources")
  .get(getAll)
  .post(createNew);

router
  .route("/projects")
  .get(getAll)
  .post(createNew);

router
  .route("/tasks")
  .get(getAll)
  .post(createNew);

router
  .route("/projects/:id")
  .get(getIndividual)
  .delete(deleteIndividual)
  .put(updateIndividual);

module.exports = router;
