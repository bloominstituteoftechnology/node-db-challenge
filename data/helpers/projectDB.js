const db = require('../dbConfig.js');

module.exports = {
  get: function(id) {
    let query = db('projects');
    if (id) {
      query.where('id', Number(id)).first();
    }

    return query;
  },
  getProjectsActions: function(projectId) {
    // return db('posts as p')
    //   .join('users as u', 'u.id', 'p.userId')
    //   .select('p.id', 'p.text', 'u.name as postedBy')
    //   .where('p.userId', projectId);
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
