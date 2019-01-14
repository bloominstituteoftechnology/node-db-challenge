const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
    get: function(id) {
        let query = db('actions as a');

        if (id) {
            return query
                .where('id', id)
                .first()
                .leftJoin('projects', 'project_id', 'projects.id')
                .then(action => mappers.actionToBody(action));
        }

        return query
            .leftJoin('projects', 'project_id', 'projects.id')
            .select('a.id')
            .select('a.notes')
            .select('a.description')
            .select('a.completed')
            .select('projects.id as project.id')
            .select('projects.name as project.name')
            .select('projects.completed as project.completed')
            .select('projects.description as project.description')
            .then(actions => {
            return actions.map(action => mappers.actionToBody(action));
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
