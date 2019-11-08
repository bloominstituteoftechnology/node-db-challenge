const db = require("../../data/dbConfig");

function getProjects() {
  return db("projects");
}

function getProjectTasks(project_id) {
  return db("tasks")
    .select("id", "description", "notes", "completed")
    .where({ project_id });
}

function getProjectResources(project_id) {
  return db("resources as r")
    .join("project-resources as pr", "pr.resource_id", "r.id")
    .select("r.id", "r.name", "r.description")
    .where({ project_id });
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => db("projects").where({ id: ids[0] }));
}

function addTask(task, project_id) {
  return db("tasks")
    .insert({ ...task, project_id })
    .then(id => db("tasks").where({ id: id[0] }));
}

module.exports = {
  getProjects,
  getProjectTasks,
  getProjectResources,
  addProject,
  addTask
};
