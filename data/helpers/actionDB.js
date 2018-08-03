const db = require('../db.js');

module.exports = {
  get: function(id) {
    let query = db('actions');

    if (id) {
      return query
        .where('id', id)
        .then(response => {
            if (response.length===0) {
                return response;
            } else {
                response[0].completed = response[0].completed?true:false;
                return response[0];
            }
        })
    }

    return query.then(actions => {
      if (actions.length!==0){
          actions.forEach(action => action.completed = action.completed?true:false);
      }
      return actions;
    });
  },

  insert: function(action) {
    return db('actions')
      .insert(action)
      .then(([id]) => this.get(id));
  },

  update: function(id, changes) {
    return db('actions')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },

  remove: function(id) {
    return db('actions')
      .where('id', id)
      .del();
  },
};