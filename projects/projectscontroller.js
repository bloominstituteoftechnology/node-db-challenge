const db = require('../database/dbConfig.js');

module.exports = {
  get: function(id) {
    let query = db('projects as p');

    if (id) {
      query
        .join('actions as a', 'p.id', 'a.id')
        .select('p.text', 'a.description')
        .where('p.id', id);

      const promises = [query, this.getProjectContexts(id)]; 

      return Promise.all(promises).then(function(results) {
        let [projects, contexts] = results;
        let project = projects[0];
        project.contexts = contexts.map(t => c.context);

        return project;
      });
    }

    return query;
  },
  getProjectContexts: function(projectId) {
    return db('contexts as c')
      .join('projectcontexts as pc', 'c.id', 'pc.contextId')
      .select('c.context')
      .where('pc.projectId', projectId);
  },
  insert: function(project) {
    return db('projects')
      .insert(project)
      .then(ids => ({ id: ids[0] }));
  },
  update: function(id, project) {
    return db('projects')
      .where('id', id)
      .update(project);
  },
  remove: function(id) {
    return db('projects')
      .where('id', id)
      .del();
  },
};