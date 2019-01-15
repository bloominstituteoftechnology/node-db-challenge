const DB = require("../dbConfig");

module.exports = {
  addProject: project => {
    return DB("projects").insert(project);
  },
  addAction: action => {
    return DB("actions").insert(action);
  },
  getProject: id => {
    return DB("projects").where("id", id);
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
  }
};
