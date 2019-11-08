const db = require("../data/db-config");

const get = () => {
  return db("projects").then(projects => {
    projects.forEach(project => {
      project.completed = project.completed > 0;
    });
    return projects;
  });
};

const getById = id => {
  return db("projects")
    .select("*")
    .where({ id })
    .first();
};

const add = project => {
  return db("projects")
    .insert(project, "*")
    .then(id => {
      return getById(...id).then(project => {
        project.completed = project.completed > 0;
        return project;
      });
    });
};

const getTaskById = id => {
  return db("tasks")
    .where({ id })
    .first();
};

const getTasks = id => {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select("projects.name", "projects.project_description", "tasks.*")
    .where("tasks.project_id", id);
};

const addTask = task => {
  return db("tasks")
    .insert(task, "*")
    .then(id => {
      console.log(id);
      return getTaskById(...id)
        .then(task => {
          console.log(task);
          task.completed = task.completed > 0;
          return task;
        })
        .catch(error => {
          console.log(error);
        });
    });
};

module.exports = {
  get,
  getById,
  add,
  getTaskById,
  getTasks,
  addTask
};
