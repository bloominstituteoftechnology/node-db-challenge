const db = require('../dbConfig.js');

module.exports = {
  get: function(id) {
    let query = db('projects');
    if (id) {
      query.where('id', Number(id)).first();
    }

    return query;
  },
  /*
  select p.id, p.name, p.description, p.done, a.p_id as ActionID, a.description, a.notes, a.done
   from projects as p
  join actions as a on p.Id = a.p_id
  where p.id  = 3
*/
  getProjectsActions: function(projectId) {
    return db
      .select(
        'p.id, p.name, p.description, p.done, a.p_id as ActionID, a.description, a.notes, a.done',
      )
      .from('projects as p')
      .join('actions as a', 'p.id', 'a.p_id')
      .where('p.id', projectId)
      .first();

    // return db('projects as p')
    //   .select(
    //     'p.id, p.name, p.description, p.done, a.p_id as ActionID, a.description, a.notes, a.done',
    //   )
    //   .join('actions as a', 'p.id', 'a.p_id')
    //   .where('p.id', projectId);
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
