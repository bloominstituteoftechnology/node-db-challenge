const db = require("./db-config");

module.exports = {
  addProject,
  getProjects,
  addResource,
  getResources,
  addTask,
  getTasks
};

function addProject(project) {
  return db("project").insert(project);
}

function getProjects() {
  return db("project");
}

function addResource(resource) {
  return db("resource").insert(resource);
}

function getResources() {
  return db("resource");
}

function addTask(task) {
  return db("task").insert(task);
}

function getTasks() {
  // retrieving a list of tasks. The list of tasks should include the project name and project description.

  // SELECT task.id, project.name, project.description, task.description, task.notes, task.completed
  // FROM task
  // INNER JOIN project on project.id = task.project_id
  return db("task")
    .innerJoin("project", "project.id", "=", "task.project_id")
    .select(
      "task.id",
      "project.name",
      "project.description",
      "task.description",
      "task.notes",
      "task.completed"
    );
}
