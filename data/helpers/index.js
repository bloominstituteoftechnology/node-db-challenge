const DB = require("../dbConfig");

module.exports = {
  addProject: project => {
    return DB("projects").insert(project);
  },
  getProject: id => {
    return DB("projects").where("id", id);
  },
  deleteProject: id => {
    return DB("projects")
      .where("id", id)
      .del();
  },
  updateProject: (id, updates) => {
    return DB("projects")
      .where("id", id)
      .update(updates);
  },
  addAction: action => {
    return DB("actions").insert(action);
  },
  getActions: project_id => {
    return DB("actions").where("project_id", project_id);
  },
  getActionsCompleted: project_id => {
    return DB("actions")
      .where("project_id", project_id)
      .andWhere("completed", 1);
  },
  getActionsNotCompleted: project_id => {
    return DB("actions")
      .where("project_id", project_id)
      .andWhere("completed", 0);
  },
  deleteActionsForDeletedProject: project_id => {
    return DB("actions")
      .where("project_id", project_id)
      .del();
  },
  deleteAction: id => {
    return DB("actions")
      .where("id", id)
      .del();
  },
  updateAction: (id, updated) => {
    return DB("actions")
      .where("id", id)
      .update(updated);
  }
};
