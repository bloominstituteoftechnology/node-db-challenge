const db = require("../data/dbConfig.js");

module.exports = {
  getProjects,
  getProjectById,
  add,
  // update,
  remove
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function add(post) {
  // console.log(post, "post tasks-model line 22");
  return db("projects")
    .insert(post)
    .then(ids => {
      return getProjectById(ids[0]);
    });
}

// function update(changes, id) {
//   return db("schemes")
//     .where({ id })
//     .update(changes);
// }

function remove(id) {
  return db("projects")
    .where("id", id)
    .del();
}
