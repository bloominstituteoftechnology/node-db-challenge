// const controller = require("../utils/db-config.js");
const controller = require("../utils/db-config.js");
const { validAddition } = require("./middleWare.jsx");
console.log("controllers");
//
//  KEEPING CONTROLLER METHODS GENERIC TO MAKE IT REUSABLE FOR ALL
//

// ================================
//            GET, ALL
// ================================
// @desc    GET all recipes
// @route   GET to /api/recipes
exports.getAll = (req, res, next) => {
  // const { limit, sortby, sortdir } = req.query;
  console.log("getAll", req.params);
  controller("recipes")
    // .find()
    // .limit(limit)
    // .orderBy(sortby, sortdir) //orders the returns in ascending order
    .then(allReturns => {
      res
        .status(200) //success
        .json(allReturns);
    })
    .catch(e => {
      console.log("getAll error: ", e);
      res
        .status(500) //server error
        .json({ error: "error in getAllIndividual" });
    });
};
// ================================
//            GET, ID
// ================================
// @desc    GET recipes with :id
// @route   GET to /api/recipes/:id
exports.getIndividual = (req, res, next) => {
  console.log("getIndividual");
  controller("recipes")
    // .get()
    .where({ id: req.params.id })
    .first()
    .then(individual => {
      console.log("getIndividual", individual);
      if (individual) {
        res
          .status(200) //success
          .json(individual);
      } else {
        error400("Account not found");
      }
    })
    .catch(e => {
      res
        .status(500) //server error
        .json({ error: "error in getIndividual" });
    });
};

// ================================
//            POST
// ================================
// @desc    POST/CREATE new car
// @route   POST to /api/recipes
exports.createNew = (req, res, next) => {
  if (validAddition(req.body)) {
    console.log("addNew: ", req.body);
    controller("recipes")
      .insert(req.body, "id")
      .then(([id]) => id)
      .then(id => {
        controller("recipes")
          .where({ id })
          .first()
          .then(recipes => {
            res
              .status(201) //success
              .json(recipes);
          });
      })
      .catch(e => {
        res
          .status(500) //server error
          .json({ error: "error in addNew" });
      });
  } else {
    res
      .status(400) //error
      .json({ message: "Entered information is not valid" });
  }
};

// ================================
//            DELETE
// ================================
// @desc    DELETE car with :id
// @route   DELETE to /api/recipes/:id
exports.deleteIndividual = (req, res, next) => {
  console.log("deleteIndividual: ", req.body);
  controller("recipes")
    .where({ id: req.params.id })
    .del()
    .then(unit => {
      res
        .status(200) //success
        .json({ message: `Project ID of ${req.params.id} was deleted` });
    })
    .catch(e => {
      console.log("deleteIndividual err: ", e);
      res
        .status(500) //server error
        .json({ errorMessage: "Error in deleteIndividual" });
    });
};

// ================================
//            PUT
// ================================
// @desc    UPDATE recipes with :id
// @route   PUT to /api/recipes/:id
exports.updateIndividual = (req, res, next) => {
  console.log("updateIndividual: ", req.body);
  controller("recipes")
    .where({ id: req.params.id })
    .update(req.body)
    .then(unit => {
      if (unit) {
        res
          .status(200) //success
          .json({
            message: `Project ID of ${req.params.id} was updated.`,
            changes: req.body
          });
      } else {
        res
          .status(404)
          .json({ message: `Cannot locate ID of ${req.params.id} to update` });
      }
    })
    .catch(e => {
      console.log("updateIndividual err: ", e);
      res
        .status(500) //server error
        .json({ errorMessage: "Error in updateIndividual" });
    });
};
