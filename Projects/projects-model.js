const db = require("../db-config");

module.exports = {
  getProjects,
  getProjectTasks,
  insert,
  getProjectResources,
  insertResource,
  getResources
};

function getProjects(id) {
  let query = db("projects");
  if (id) {
    query.where("projects.id", id).first();

    const promises = [
      query,
      this.getProjectTasks(id),
      this.getProjectResources(id)
    ];
    return Promise.all(promises).then(function(results) {
      let [projects, tasks, resources] = results;

      if (projects) {
        projects.tasks = tasks;
        projects.resources = resources;
        return projects;
      } else {
        return null;
      }
    });
  } else {
    return db("projects");
  }
}

function insert(project) {
  return db("projects")
    .insert(project, "id")
    .then(([id]) => this.getProjects(id));
}
function insertResource(resource, id) {
  return db("project_resource")
    .insert({ resourceId: resource, projectId: id })
}

function getResources(id) {
  console.log(id)


    return db("resources")
    .join("project_resource", "resources.id", "project_resource.resourceId")
    .where("project_resource.id",id)
  
  
}
function getProjectTasks(id) {
  return db("tasks").where("tasks.projectId", id);
}
function getProjectResources(id) {
  return db("resources")
    .join("project_resource", "project_resource.resourceId", "resources.id")
    .where("project_resource.projectId", id)
    .select("resourceName", "resourceDescription", "resourceId");
}