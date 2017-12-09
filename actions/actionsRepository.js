const db = require('../configuration/db.js');

module.exports = {
  get: function(id) {
    let query = db('Actions');
    if (id) {
      query.where('id', id);
    }
    return query.then();
  },
  post: (action) => {
    if (!action) return { error: new Error('action is required') };
    return db('Actions').insert(action)
          .then()
          .catch((err) => {
            return {error: new Error('insert error:' + err.message)}
          });   
  }  
};