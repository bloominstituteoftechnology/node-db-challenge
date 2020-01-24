const db = require("../data/dbConfig.js");

module.exports = {
  getTasks,
  getTaskById,
  add,
  // update,
  remove
};

function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.task_project_id")
    .select(
      "p.project_name",
      "p.project_description",
      "t.task_project_id",
      "t.task_description",
      "t.task_notes",
      "t.id"
    );
}

function getTaskById(id) {
  return db("tasks as t").where({ task_project_id: id });
}

function add(post) {
  // console.log(post, "post tasks-model line 22");
  return db("tasks")
    .insert(post)
    .then(ids => {
      return getTaskById(ids[0]);
    });
}

// function update(changes, id) {
//   return db("schemes")
//     .where({ id })
//     .update(changes);
// }

function remove(id) {
  return db("tasks")
    .where("id", id)
    .del();
}
