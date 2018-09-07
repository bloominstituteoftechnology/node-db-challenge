const db = require('../dbConfig');

module.exports = {
  get: function(id) {
    let query = db('projects');

    if(id){
      query.where({ id });

      const promises = [query, this.getProjectActions(id)];

      return Promise.all(promises).then(function(results) {
        let [projects, actions] = results;
        let project = projects[0];
        project.actions = actions;

        return project;
      });
    }

    return query;
  },
  getProjectActions: function(prjId) {
    return db('actions').where({ project_id: prjId });
  },
  insert: function(project) {
    return db('projects')
            .insert(project)
            .then(ids => ({ id: ids[0] }));
  },
  update: function(id, project) {
    return db('projects')
            .where({ id })
            .update(project);
  },
  remove: function(id) {
    return db('projects')
            .where({ id })
            .del();
  },
}
