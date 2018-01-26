const db = require('../configuration/db.js');

module.exports = {
  get: function(id) {
    let query = db('actions');
    if (id) {
      query.where('id', id);
    }
    return query.then();
  },
  // getPostTags: function(postId) {
  //   return db('tags as t')
  //     .join('posttags as pt', 't.id', 'pt.tagId')
  //     .select('t.tag')
  //     .where('pt.postId', postId)
  //     .then();
  // },
};
