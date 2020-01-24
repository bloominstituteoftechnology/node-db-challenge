const db = require("../data/dbConfig.js");

module.exports = {
  getProjects,
  getProjectById
  // add,
  // update,
  // remove
};

function getProjects() {
  return db("recipes");
}

function getProjectById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

// function add(scheme) {
//   return db("schemes")
//     .insert(scheme)
//     .then(ids => {
//       return findById(ids[0]);
//     });
// }

// function update(changes, id) {
//   return db("schemes")
//     .where({ id })
//     .update(changes);
// }

// function remove(id) {
//   return db("schemes")
//     .where("id", id)
//     .del();
// }
