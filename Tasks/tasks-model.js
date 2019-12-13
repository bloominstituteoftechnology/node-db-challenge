const db = require("../data/db-config");

module.exports = {
  getById,
  get,
  add,
  getProjectTasks,
  taskToBody
};

function add(task) {
  return db("tasks")
    .insert(task)
    .then(ids => {
      return getById(ids[0]);
    });
}

function getById(id) {
  return db("tasks")
    .where({ id })
    .first();
}
function get() {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select(
      "projects.name as project_name",
      "projects.description as project_description",
      "tasks.description as task_description",
      "tasks.notes as task_notes",
      "tasks.completed"
    );
}

function getProjectTasks(projectId) {
  return db("tasks")
    .where("project_id", projectId)
    .then(tasks => tasks.map(task => taskToBody(task)));
}
function taskToBody(task) {
  return {
    ...task
  };
}
