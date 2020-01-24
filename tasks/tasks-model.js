const db = require("../data/dbConfig.js");

module.exports = {
  getTasks,
  getTaskById
  // add,
  // update,
  // remove
};

function getTasks() {
  return db("recipes");
}

function getTaskById(id) {
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
