const db = require('../dbConfig');

module.exports = {
    get: function (id) {
        let projDb = db('projects');

        if (id) {
            return projDb
                .where({ 'projects.id': id })
                .from('projects')
                .leftJoin('actions', 'projects.id', '=', 'actions.project_id')
                .where('actions.project_id', id)
                .options({nestTables: true, rowMode: 'array'})
                .then(actions => {return actions})
        }

        return projDb.then(projects => { return projects })
    },

    insert: function (project) {
        return db('projects')
            .insert(project)
            .then(project => this.get(project.id))
    },
    update: function (id, changes) {
        return db('projects')
            .where('id', id)
            .update(changes)
            .then(result => result > 0 ? this.get(id) : null)
    },
    remove: function (id) {
        return db('projects')
            .where('id', id)
            .del();
    }
}