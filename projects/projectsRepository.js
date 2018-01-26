const db = require('../configuration/db.js');

module.exports = {
  get: function(id) {
    let query = db('projects as p');

    if (id) {
      query
        .join('actions as a', 'p.userId', 'u.id')
        .select('p.text', 'u.name')
        .where('p.id', id);

      const promises = [query, this.getPostTags(id)]; // [ posts, tags ]

      return Promise.all(promises).then(function(results) {
        let [posts, tags] = results;
        let post = posts[0];
        post.tags = tags.map(t => t.tag);

        return post;
      });
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

/*
select p.text, u.name, t.tag from posts p
join users u on p.userId = u.id
join posttags pt on p.id = pt.postId
join tags t on pt.tagId = t.id
*/
