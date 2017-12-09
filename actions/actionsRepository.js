const db = require('../configuration/db.js');

module.exports = {
  get: function(id) {
    let query = db('actions as a')

    if (id) {
      query
        .join('projects as p', 'a.projectId', 'p.id')
        .select('a.description', 'a.notes', 'a.completed')
        .where('a.id', id);
      
      const promises = [query, this.getActionContext(id)];

      return Promise.all(promises).then(function(results) {
        let [actions, contexts] = results;
        let action = actions[0];
        action.contexts = contexts.map(c => c.context);

        return action;
      });
    }

    return query.then();
  },
  getActionContext: function(actionId) {
    return db('context as c')
    .join('actioncontexts as ac', 'c.id', 'ac.actionId')
    .select('c.context')
    .where('ac.actiontId', actionId)
    .then();
  },
};