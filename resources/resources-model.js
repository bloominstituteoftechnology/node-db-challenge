const db = require("../data/dbConfig.js");

module.exports = {
  getResources,
  getResourceById
  // add,
  // update,
  // remove
};

function getResources() {
  return db("resources");
}

function getResourceById(id) {
  return db("resources")
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
