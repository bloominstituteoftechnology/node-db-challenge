const db = require('../dbConfig.js');

module.exports = {
    insert: function(project) {
        return db('projects')
            .insert(project)
            .then(ids => ({ id: ids[0]}));
    },
    getProjectActions: function(projectId) {
        return db('actions as a')
            .join('projects as p', 'p.id', 'a.project_id')
            .select('p.id as Project ID', 'p.name as Project', 'a.id as Action ID', 'a.description as Action Description', 'a.completed')
            .where('a.project_id', projectId);
    }
}