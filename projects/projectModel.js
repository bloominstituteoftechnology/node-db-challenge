const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addResource,
  addTask
};

// retrieve projects
function getProjects() {
  return db("projects");
}

// retrieve resources
function getResources() {
  return db("resources");
}

// retrieve tasts: includes project name and project description
function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .select(
      "t.project_id",
      "p.name",
      "p.description",
      "t.id",
      "t.description",
      "t.notes",
      "t.completed"
    );
}

// add projects
function addProject(project) {
  return db("projects").insert(project);
  // .then(newProject => getProjectsByID(newProject[0].id));
}
function addResource(resource) {
  return db("resources").insert(resource);
  // .then(newResource => getResourceByID(newResource[0].id));
}
function addTask(task) {
  return db("tasks").insert(task);
  // .then(newTask => getTaskByID(newTask[0].id));
}
