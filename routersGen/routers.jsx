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

router.route("/resources/:id").get(getIndividual);
// .delete(deleteIndividual)
// .put(updateIndividual);
router.route("/projects/:id").get(getIndividual);

router.route("/tasks/:id").get(getIndividual);

module.exports = router;
