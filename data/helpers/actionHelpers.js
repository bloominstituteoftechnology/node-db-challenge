const db = require('../dbConfig');

module.exports = {
  get: function(id) {
    let query = db('actions');

    if(id) {
      query.where({ id });

      let promises = [query, this.getContexts(id)];

      return Promise.all(promises).then(function(results) {
        let [actions, contexts] = results;
        let action = actions[0];
        action.contexts = contexts;

        return action;
      });
    }

    return query;
  },
  getContexts: function(actionId) {
    return db('contexts')
      .select('contexts.id as id', 'contexts.context as context')
      .join('contexts_to_actions as ca', 'ca.context_id', 'contexts.id')
      .orderBy('contexts.id')
      .where('ca.action_id', actionId);
  },
  insert: function(action) {
    return db('actions')
            .insert(action)
            .then(ids => ({ id: ids[0]}));
  },
  update: function(id, action) {
    return db('actions')
            .where({ id })
            .update(action);
  },
  remove: function(id) {
    return db('actions')
            .where({ id })
            .del();
  }
}
