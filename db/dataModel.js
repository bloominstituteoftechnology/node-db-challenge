const db = require('./dbConfig');

module.exports = {
    getProjects: function(id) {
        let query = db('projects');

        if (id) {
            return query
                .where('id', id)
                .first()
                .then(project => project)
        }

        return query.then(projects => {
            return projects;
        })
    },

    getProject: function(id) {
        let query = db('projects');

            return query
                .join('actions', 'projects.id', 'actions.project_id')
                .select('projects.id as proj_id', 'projects.name as proj_name', 'projects.description as proj_desc', 'projects.completed as proj_completed', 'actions.id as action_id', 'actions.description as action_desc', 'actions.notes as action_notes', 'actions.completed as action_completed')
                .where('projects.id', id)
                .then(project => project);
    },

    addProject: function(project) {
        return db('projects')
            .insert(project)
            .then(([id]) => this.getProjects(id));
    },

    updateProject: function(id, changes) {
        return db('projects')
            .where('id', id)
            .update(changes)
            .then(count => (count > 0 ? this.getProjects(id) : null))
    },

    deleteProject: function(id) {
        return db('projects')
            .where('id', id)
            .del();
    },

    getActions: function(id) {
        let query = db('actions');

        if (id) {
            return query
                .where('id', id)
                .first()
                .then(action => action)
        }

        return query.then(actions => {
            return actions;
        })
    },

    getAction: function(id) {
        let query = db('actions');

            return query
                .where('id', id)
                .first()
                .then(action => action);
    },

    addAction: function(project) {
        return db('actions')
            .insert(project)
            .then(([id]) => this.getActions(id));
    },

    updateAction: function(id, changes) {
        return db('actions')
            .where('id', id)
            .update(changes)
            .then(count => (count > 0 ? this.getActions(id) : null))
    },

    deleteAction: function(id) {
        return db('actions')
            .where('id', id)
            .del();
    }
}