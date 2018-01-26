const db = require('../database/dbConfig.js');

module.exports = {
    get: function(id) {
        let query = db('projects');
        if (id) {
            query.where('id', id).first();
        }
        return query;
    },

    getProjectActions: function(projectId) {
        return db('projects AS p')
            .join('actions AS a', 'a.projectId', 'p.id')
            .select('a.id', 'a.description', 'a.completed')
            .where('a.projectId', projectId)
    },

    insert: function(project) {},

    update: function(id, project) {},

    remove: function(id) {},

};