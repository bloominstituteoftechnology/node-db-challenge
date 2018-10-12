const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);
const mappers = require('./mappers')

module.exports = {
  addProject(newProject) {
    return db("projects")
      .insert(newProject)
      .into("projects");
  },

  getProjects() {
    return db("projects");
  }, 

  addAction(newAction) {
    return db("actions")
      .insert(newAction)
      .return("actions");
  },

  modifyAction(id, changes){
  return db('actions')
  .where({id})
  .update(changes)
  },

  deleteAction (id){
    return db('actions')
    .where({id: id})
    .delete()
    
  },

  deleteProject (id){
    return db('projects')
    .where({id: id})
    .delete()
    
  },

  modifyProject(id, changes){
    return db('projects')
    .where({id})
    .update(changes)
    },

  getActions() {
    return db("actions");
  },

  getActionById(id){
    return db('actions')
      .where({id:id})
  },

  get(id) {
    let query = db('projects as p');

    if (id) {
      query.where('p.id', id).first();

      const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]

      return Promise.all(promises).then(function(results) {
        let [project, actions] = results;
        project.actions = actions;

        return mappers.projectToBody(project);
      });
    }

    return query.then(projects => {
      return projects.map(project => mappers.projectToBody(project));
    });
  },
  getProjectActions: function(projectId) {
    return db('actions')
      .where('project_key', projectId)
      .then(actions => actions.map(action => mappers.actionToBody(action)));
  },

 
};
