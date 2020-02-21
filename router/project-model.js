const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getProjectsById,
  addProjects,
  getResources,
  addResources,
  getTasks,
  addTasks
};

function getProjects() {
  return db("projects");
}

function getProjectsById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getResources(id) {
  return db("projects")
    .join("project-resources", "project-resources.project_id", "projects.id")
    .join("resources", "resources.id", "project-resources.resource_id")
    .select("resources.resource_name", "resources.resource_description")
    .where("projects.id", id);
}

// function getTasks(id) {
//   return db("projects")
//     .join("tasks", "projects.id", "tasks.projects_id")
//     .select(
//       "tasks.task_description",
//       "tasks.task_notes",
//       "tasks.task_completed"
//     )
//     .where({ "projects.id": id });
// } // DOESN'T WORK

function getTasks(id) {
  return db("projects")
    .join("tasks", "tasks.project_id", "projects.id")
    .select("*")
    .where({ "tasks.project_id": id });
}

function addProjects(project) {
  return db("projects").insert(project, "id");
}

function addResources(resource) {
  return db("resources")
    .insert(resource)
    .then(ids => ({ id: ids[0] }));
}

function addTasks(task) {
  return db("tasks").insert(task);
}
