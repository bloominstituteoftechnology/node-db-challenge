const db = require('../configuration/db.js');

module.exports = {
  get: (id) => {
    let query = db('Contexts');
    if (id) {
      query.where('id', id);
    }
    return query.then();
  },
  post: (context) => {
    if (!context) return { error: new Error('context is required') };
    return db('Contexts').insert({context})
          .then()
          .catch((err) => {
            return {error: new Error('insert error:' + err.message)}
          });
  }
};