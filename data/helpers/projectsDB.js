const db = require('../dbConfig.js');

module.exports = {
  get: function(id) {
    let query = db('projects').select(
      'id',
      'name',
      'description',
      'done as completed',
    );
    if (id) {
      query.where('id', Number(id)).first();
    }

    return query;
  },
  getProjectsActions: function(projectId) {
    return db('projects')
      .select(
        'p.id',
        'p.name',
        'p.description',
        'p.done',
        'a.description',
        'a.notes',
        'a.done',
      )
      .from('projects as p')
      .join('actions as a', 'p.id', 'a.p_id')
      .where('p.id', projectId);
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
