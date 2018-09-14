const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

module.exports = {
    getProjects: function (id) {
        let query = db('projects');

        if (id) {
            return query
                .where('id', id)
                .first()
                .then(project => project) // return project with mathcing id
        } else {
            return query.then(projects => projects) // return all projects if no id
        }
    },

    getProject: function (id) {
        let query = db('projects');
        return query
            .where('id', id)
            .first()
            .then(project => project);
    },

    addProject: function (project) {
        return db('projects')
            .insert(project)
            .then((id) => this.getProjects(id));
    },

    updateProject: function (id, changes) {
        return db('projects')
            .where('id', id)
            .update(changes)
            .then(count => (count > 0 ? this.getProjects(id) : null))
    },

    deleteProject: function (id) {
        return db('projects')
            .where('id', id)
            .del();
    },

    //actions

    getActions: function (id) {
        let query = db('actions');

        if (id) {
            return query
                .where('id', id)
                .first()
                .then(action => action) // return Actions with mathcing id
        } else {
            return query.then(actions => actions) // return all Actionss if no id
        }
    },

    getAction: function (id) {
        let query = db('actions');
        return query
            .where('id', id)
            .first()
            .then(action => action);
    },

    addAction: function (project) {
        return db('actions')
            .insert(project)
            .then((id) => this.getActions(id));
    },

    updateAction: function (id, changes) {
        return db('actions')
            .where('id', id)
            .update(changes)
            .then(count => (count > 0 ? this.getActions(id) : null))
    },

    deleteAction: function (id) {
        return db('actions')
            .where('id', id)
            .del();
    },

};