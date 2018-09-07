const db = require('../dbConfig');

module.exports = {
  get: function(id) {
    let query = db('projects');

    if(id){
      query.where('id', Number(id));

      const promises = [query, this.getProjectActions(id)];

      return Promise.all(promises).then(function(results) {
        let [projects, actions] = results;
        let project = project[0];
        project.actions = actions

        return project;
      });
    }

    return query;
  },
  getProjectActions: function(prjId) {
    return db('actions').where({ project_id: prjId });
  },
}
