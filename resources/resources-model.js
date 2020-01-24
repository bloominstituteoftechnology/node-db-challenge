const db = require("../data/dbConfig.js");

module.exports = {
  getResources,
  getResourceById,
  add,
  // update,
  remove
};

function getResources() {
  return db("resources");
}

function getResourceById(id) {
  return db("resources")
    .where({ id })
    .first();
}

function add(post) {
  // console.log(post, "post tasks-model line 22");
  return db("resources")
    .insert(post)
    .then(ids => {
      return getResourceById(ids[0]);
    });
}

// function update(changes, id) {
//   return db("schemes")
//     .where({ id })
//     .update(changes);
// }

function remove(id) {
  return db("resources")
    .where("id", id)
    .del();
}
