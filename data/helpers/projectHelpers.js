const db = require('../db');
const helpers = ('./helpers');

module.exports = {
    get: function(id) {
        let query = db('projects');
        if(id) {
            query.where('projects.id', id).first();

            const promises = [query, this.getProjectActions(id)];

            return Promise.all(promises).then(function(results) {
                let [project, actions] = results;
                project.actions = actions;

                return helpers.projectToBody(project);
            });
        }
        return query.then(projects => {
            return projects.map(project => helpers.projectToBody(project));
        });
    },
    get: function(id) {
        let query = db('actions');
        if(id) {
            return query
            .where('id', id)
            .first()
            .then(action => helpers.actionToBody(action));
        }
        return query.then(actions => {
            return actions.map(action => helpers.actionToBody(action));
        });
    },
    getProjectActions: function(projectId) {
        return db('actions')
        .where('project_id', projectId)
        .then(actions => actions.map(action => helpers.actionToBody(action)));
    },
    insert: function(project) {
        return db('projects')
        .insert(project)
        .then(([id]) => this.get(id));
    },
    update: function(id, changes) {
        return db('projects')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.get(id) : null));
    },
    remove: function(id) {
        return db('projects')
        .where('id', id)
        .del();
    }
}