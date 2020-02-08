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
  .route("/recipes")
  .get(getAll)
  .post(createNew);

router
  .route("/recipes/:id")
  .get(getIndividual)
  .delete(deleteIndividual)
  .put(updateIndividual);

module.exports = router;
