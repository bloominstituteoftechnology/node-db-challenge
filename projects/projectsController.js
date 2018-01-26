const db = require('../database/dbConfiguration.js');

module.exports = {
    get: function (id) {
        let query = db('actions as a');

        if (id) {
            query
                .join('projects as p', 'a.actionId', 'p.id')
                .select('p.text', 'u.name as postedBy')
                .where('p.id', id);
            const promises = [query, this.getPostTags(id)];

            return Promise.all(promises).then(function (results) {
                let [posts, tags] = results;
                let post = posts[0];
                console.log(tags)
                post.tags = tags.map(t => t.tag);
                return post;
            });
        }
        return query;
    },
    getPostTags: function (postId) {
        return db('tags as t')
            .join('posttags as pt', 't.id', 'pt.tagId')
            .select('t.tag')
            .where('pt.postId', postId);
    },
    insert: function (project) {
        return db('projects')
            .insert(project)
            .then(ids => ({ id: ids[0] }));
    },
    update: function (id, project) {
        return db('projects')
            .where('id', id)
            .update(project);
    },
    remove: function (id) {
        return db('projects')
            .where('id', id)
            .del();
    },
};
