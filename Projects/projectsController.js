const db = require('../database/dbConfiguration.js');

module.exports = {
  get: function(id) {
    let query = db('projects as p');

    if (id) {
      query
        .join('actions as u', 'p.actionId', 'a.id')
        .select('p.text', 'a.name as postedBy')
        .where('p.id', id);

      const promises = [query, this.getProjectsTags(id)]; // [ projects, contexts ]

      return Promise.all(promises).then(function(results) {
        let [projects, contexts] = results;
        let projects = projects[0];
        console.log(contexts)
        projects.contexts = contexts.map(t => t.context);

        return project;
      });
    }

    return query;
  },
  getProjectTags: function(projectId) {
    return db('tags as t')
      .join('projecttags as pt', 't.id', 'pt.tagId')
      .select('t.tag')
      .where('pt.projects', projectId);
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
